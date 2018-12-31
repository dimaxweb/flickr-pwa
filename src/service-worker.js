  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

  /* Workbox will insert the the file names inside empty array matching the globPatterns in workbox-cli-config.js  */
  workbox.precaching.precacheAndRoute([]);

  workbox.routing.registerNavigationRoute("/index.html");
  /*
      cache all requests for images for 30 days
   */
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('https://farm2.staticflickr.com/*'),
     workbox.strategies.cacheFirst({
      cacheName: 'photos',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );


  /* cache responses from Flickr API */
  workbox.routing.registerRoute(
    new RegExp('https://api.flickr.com/services/rest*'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'api-cache',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [200]
        })
      ]
    })
  );




