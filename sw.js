//service worker

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/zigexnbu_2.jepg',
];

self.addEventListener('install', function(event) {
  // インストール処理
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


