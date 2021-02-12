import { CacheableResponsePlugin } from "workbox-cacheable-response"
import { clientsClaim, skipWaiting } from "workbox-core"
import { ExpirationPlugin } from "workbox-expiration"
import * as googleAnalytics from "workbox-google-analytics"
import { cleanupOutdatedCaches, matchPrecache, precacheAndRoute } from "workbox-precaching"
import { warmStrategyCache } from "workbox-recipes"
import { registerRoute, setCatchHandler } from "workbox-routing"
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from "workbox-strategies"

googleAnalytics.initialize()

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)
clientsClaim()

function cacheKeyWillBeUsed({ request }) {
  const url = new URL(request.url)
  url.pathname = url.pathname.replace(/\/index\.html$/, "/")
  url.pathname = url.pathname.replace(/\.html$/, "/")
  // Clear out all search params.
  url.search = ""
  return url.href
}

const navigationStrategy = new NetworkFirst({
  cacheName: "pages",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [200],
    }),
    {cacheKeyWillBeUsed},
  ],
});

registerRoute(
  ({ request }) => request.mode === "navigate",
  navigationStrategy
);

warmStrategyCache({
  urls: ["/"],
  strategy: navigationStrategy,
});

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "worker",
  new StaleWhileRevalidate({
    cacheName: "assets",
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|ico|mp4)$/,
  // Use the cache if it's available.
  new CacheFirst({
    cacheName: "image-cache",
    fetchOptions: {
      credentials: "include",
    },
    plugins: [
      new ExpirationPlugin({
        // Cache only 50 images.
        maxEntries: 50,
        // Cache for a maximum of a day.
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
)

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
  ({ url }) => url.origin === "https://fonts.googleapis.com",
  new StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
)

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  ({ url }) => url.origin === "https://fonts.gstatic.com",
  new CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
)

// Catch routing errors, like if the user is offline
setCatchHandler(async ({ event }) => {
  // Return the precached offline page if a document is being requested
  if (event.request.destination === "document") {
    return matchPrecache("/offline.html")
  }

  return Response.error()
})

addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    skipWaiting()
  }
})
