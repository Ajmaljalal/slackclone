const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html', 'logo.png', 'manifest.json'];

const self = this;
// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
});

// Listen for requests
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         return response || fetch(event.request)
//           .catch(() => {
//             return caches.match('offline.html')
//           })
//       })
//   )
// });

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

// Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      })
    ))
  )
});