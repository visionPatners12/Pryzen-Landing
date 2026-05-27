const lottieCache = new Map();
const lottieInflight = new Map();
const lottieFailed = new Set();
const assetInflight = new Map();
const assetReady = new Set();
const assetFailed = new Set();

const MAX_CONCURRENT_ASSET_LOADS = 2;
const ASSET_TIMEOUT_MS = 12000;

let activeLoads = 0;
const queuedLoads = [];

function enqueueLimitedLoad(task) {
  return new Promise((resolve) => {
    queuedLoads.push({ task, resolve });
    runNextLoad();
  });
}

function runNextLoad() {
  if (activeLoads >= MAX_CONCURRENT_ASSET_LOADS || queuedLoads.length === 0) return;

  const { task, resolve } = queuedLoads.shift();
  activeLoads++;

  task()
    .then(resolve)
    .catch((error) => resolve({ ok: false, error }))
    .finally(() => {
      activeLoads--;
      runNextLoad();
    });
}

export function getLottieFromCache(url) {
  return lottieCache.get(url) || null;
}

export function setLottieInCache(url, data) {
  lottieCache.set(url, data);
}

export function didLottieFail(url) {
  return lottieFailed.has(url);
}

export function getLottieAssetUrls(animationData, animationUrl) {
  if (!animationData?.assets) return [];

  return animationData.assets
    .filter((asset) => asset.p && !String(asset.p).startsWith("data:"))
    .map((asset) => {
      const assetPath = `${asset.u || ""}${asset.p}`;
      const origin = globalThis.location?.origin || "";

      try {
        if (assetPath.startsWith("/")) return new URL(assetPath, origin).toString();
        return new URL(assetPath, new URL(animationUrl, origin)).toString();
      } catch {
        return assetPath;
      }
    });
}

export async function preloadLottieJson(url) {
  if (lottieCache.has(url)) return lottieCache.get(url);
  if (lottieInflight.has(url)) return lottieInflight.get(url);

  const promise = enqueueLimitedLoad(() => fetch(url))
    .then((r) => {
      if (!r?.ok) throw new Error(`HTTP ${r?.status || "unknown"} for ${url}`);
      return r.json();
    })
    .then((data) => {
      lottieCache.set(url, data);
      lottieInflight.delete(url);
      return data;
    })
    .catch((err) => {
      lottieInflight.delete(url);
      lottieFailed.add(url);
      console.warn(`[lottieCache] Failed to load: ${url}`, err);
      return null;
    });

  lottieInflight.set(url, promise);
  return promise;
}

function preloadImageAsset(url) {
  if (assetReady.has(url)) return Promise.resolve({ url, ok: true });
  if (assetInflight.has(url)) return assetInflight.get(url);

  const promise = enqueueLimitedLoad(
    () =>
      new Promise((resolve, reject) => {
        const img = new Image();
        const timer = setTimeout(() => {
          reject(new Error(`Asset timeout: ${url}`));
        }, ASSET_TIMEOUT_MS);

        img.onload = () => {
          const finish = () => {
            clearTimeout(timer);
            resolve({ url, ok: true });
          };

          if (img.decode) {
            img.decode().then(finish).catch(finish);
          } else {
            finish();
          }
        };

        img.onerror = () => {
          clearTimeout(timer);
          reject(new Error(`Asset failed: ${url}`));
        };

        img.src = url;
      })
  )
    .then((result) => {
      assetReady.add(url);
      assetInflight.delete(url);
      return result;
    })
    .catch((err) => {
      assetFailed.add(url);
      assetInflight.delete(url);
      console.warn(`[lottieCache] Failed to preload asset: ${url}`, err);
      return { url, ok: false, error: err };
    });

  assetInflight.set(url, promise);
  return promise;
}

export async function preloadLottieAssets(url, options = {}) {
  const animationData = options.animationData || (await preloadLottieJson(url));

  if (!animationData) {
    return { ok: false, total: 0, failed: 1 };
  }

  const assetUrls = getLottieAssetUrls(animationData, url);
  const limit = options.count === undefined ? assetUrls.length : options.count;
  const selectedUrls = assetUrls.slice(0, limit);
  const results = await Promise.all(selectedUrls.map(preloadImageAsset));
  const failedCount = results.filter((result) => !result.ok).length;

  return {
    ok: failedCount === 0,
    total: selectedUrls.length,
    failed: failedCount,
  };
}

export async function preloadAndCacheLottie(url) {
  return preloadLottieJson(url);
}
