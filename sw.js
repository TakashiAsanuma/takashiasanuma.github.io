//service worker

importScripts('serviceworker-cache-polyfill.js');

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'zigexnbu_1.jpeg',
  'zigexnbu_2.jpeg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.url.toLowerCase().indexOf('zigexnbu_1.jpeg') != -1) {
    console.log('zigexnbu');
    event.respondWith(caches.match('zigexnbu_2.jpeg'));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // キャッシュがあったのでそのレスポンスを返す
        if (response) {
          console.log('cache');
          return response;
        }

        console.log('no cache');
        return fetch(event.request);
      })
  );
});

