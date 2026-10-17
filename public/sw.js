const CACHE_NAME = "hyperoffice-pwa-v3";

const PRECACHE_URLS = [
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/logo-mark.svg",
];

function isChunkOrStyle(pathname) {
  return (
    pathname.startsWith("/next-static/") ||
    pathname.startsWith("/_next/") ||
    /\.(js|css|map)$/i.test(pathname)
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Chunks & styles: always network — never cache (prevents corrupt/stale JS)
  if (isChunkOrStyle(url.pathname)) {
    event.respondWith(fetch(event.request));
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(event.request)
            .then((cached) => cached || caches.match("/index.html"))
        )
    );
    return;
  }

  // Icons, images, svg: network with cache fallback only
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
