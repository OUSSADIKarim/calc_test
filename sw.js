self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static-site").then((cache) => {
      cache.addAll(["/index.html", "main.js", "/styles.css"]);
    })
  );
});

self.addEventListener("activate", (e) => {});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});
