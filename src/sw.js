/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js")

workbox.precaching.cleanupOutdatedCaches()
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)
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

function cacheKeyWillBeUsed({ request }) {
  const url = new URL(request.url)
  url.pathname = url.pathname.replace(/\/index\.html$/, "/")
  url.pathname = url.pathname.replace(/\.html$/, "/")
  return url.href
}

const networkFirstStrategy = new workbox.strategies.NetworkFirst({
  cacheName: "docs-cache",
  fetchOptions: {
    credentials: "include"
  },
  plugins: [{ cacheKeyWillBeUsed }]
})

const navigationRoute = new workbox.routing.NavigationRoute(networkFirstStrategy)
workbox.routing.registerRoute(navigationRoute)
workbox.routing.setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case "document":
      return caches.match(workbox.precaching.createHandlerBoundToURL("offline.html"))

    default:
      // If we don't have a fallback, just return an error response.
      return Response.error()
  }
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
      new workbox.expiration.ExpirationPlugin({
        // Cache only 50 images.
        maxEntries: 50,
        // Cache for a maximum of a day.
        maxAgeSeconds: 24 * 60 * 60
      })
    ]
  })
)

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(/.*(?:googleapis)\.com.*$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "googleapis-cache"
  })
)

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.ExpirationPlugin({
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
