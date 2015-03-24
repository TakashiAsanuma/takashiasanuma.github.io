//service worker

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/zigexnbu_2.jpeg'
];

self.addEventListener('install', function(event) {
  console.log('ServiceWorker.oninstall: ', e);
  // インストール処理
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
