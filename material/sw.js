importScripts("precache-manifest.1797b5b598b47b189ec5e956038b7af7.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

workbox.precaching.cleanupOutdatedCaches()
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
workbox.core.clientsClaim()
workbox.googleAnalytics.initialize()

workbox.routing.registerRoute(
  /\.(?:js|json)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "js-cache",
    fetchOptions: {
      credentials: "include"
    }
  })
)

const docsHandler = new workbox.strategies.NetworkFirst({
  cacheName: "docs-cache",
  fetchOptions: {
    credentials: "include"
  },
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 100
    })
  ]
})

workbox.routing.registerRoute(/\.html$/, args => {
  return docsHandler.handle(args).then(response => {
    if (!response) {
      return caches.match("offline.html")
    } else if (response.status === 404) {
      return caches.match("404.html")
    }
    return response
  })
})

workbox.routing.registerRoute(
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "css-cache",
    fetchOptions: {
      credentials: "include"
    }
  })
)

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|ico|mp4)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache",
    fetchOptions: {
      credentials: "include"
    },
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 50 images.
        maxEntries: 50,
        // Cache for a maximum of a day.
        maxAgeSeconds: 24 * 60 * 60
      })
    ]
  })
)

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets"
  })
)

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
)

addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    skipWaiting()
  }
})

