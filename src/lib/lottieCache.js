const cache = new Map();
const inflight = new Map();

export function getLottieFromCache(url) {
  return cache.get(url) || null;
}

export function setLottieInCache(url, data) {
  cache.set(url, data);
}

export async function preloadAndCacheLottie(url) {
  if (cache.has(url)) return cache.get(url);
  if (inflight.has(url)) return inflight.get(url);

  const promise = fetch(url)
    .then((r) => r.json())
    .then((data) => {
      cache.set(url, data);
      inflight.delete(url);
      return data;
    })
    .catch(() => {
      inflight.delete(url);
      return null;
    });

  inflight.set(url, promise);
  return promise;
}
