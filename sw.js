// MedicareX Service Worker for Offline Demo & PWA Support
const CACHE_NAME = 'medicarex-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './translations.js',
  './med-info-db.js',
  './app.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached resource, update cache in background (stale-while-revalidate for local files)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(() => {
          // Ignore offline fetch errors
        });
        return cachedResponse;
      }

      // If not in cache, fetch from network
      return fetch(event.request).then((response) => {
        // Cache local origin requests if successful
        if (response && response.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch((err) => {
        // If offline and request is for page navigation, fallback to index.html
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        throw err;
      });
    })
  );
});
