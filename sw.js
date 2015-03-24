//service worker

var CACHE_NAME = 'my-site-cache-v1';
//var urlsToCache = '';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll('zigexnbu_2.jpeg');
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // キャッシュがあったのでそのレスポンスを返す
        if (response) {
          console.log('Return cache');
          return response;
        }

        console.log('Return no cache');
        return fetch(event.request);
      })
  );
});
