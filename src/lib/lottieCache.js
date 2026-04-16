const cache = new Map();
const inflight = new Map();
const failed = new Set();

export function getLottieFromCache(url) {
  return cache.get(url) || null;
}

export function setLottieInCache(url, data) {
  cache.set(url, data);
}

export function didLottieFail(url) {
  return failed.has(url);
}

export async function preloadAndCacheLottie(url) {
  if (cache.has(url)) return cache.get(url);
  if (inflight.has(url)) return inflight.get(url);

  const promise = fetch(url)
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
      return r.json();
    })
    .then((data) => {
      cache.set(url, data);
      inflight.delete(url);
      return data;
    })
    .catch((err) => {
      inflight.delete(url);
      failed.add(url);
      console.warn(`[lottieCache] Failed to load: ${url}`, err);
      return null;
    });

  inflight.set(url, promise);
  return promise;
}
