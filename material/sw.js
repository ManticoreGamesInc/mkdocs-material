/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

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
precacheAndRoute([{"revision":"2ec2cb2199d4d881e6a6ad86690f6add","url":"fonts/lg.svg"},{"revision":"f4292655f93dd12d9b8e4fc067ef2489","url":"fonts/lg.ttf"},{"revision":"1fbfd4bcffccb94e8e8a5ea70616b296","url":"fonts/lg.woff"},{"revision":"1bbb8ee0cbf018c7d7df11656924b429","url":"icons/apple-splash-1080-1920.png"},{"revision":"c5c8c77aa6fa503253016271fdb7b95d","url":"icons/apple-splash-1125-2436.png"},{"revision":"731fdf52f5eaba17495218b5a38acf6c","url":"icons/apple-splash-1136-640.png"},{"revision":"c4f585b92da82da0602ec608ff45801e","url":"icons/apple-splash-1170-2532.png"},{"revision":"d52edf427efbf3ec305f616020d20891","url":"icons/apple-splash-1242-2208.png"},{"revision":"dacd1b31b1017c367b05b282681e1904","url":"icons/apple-splash-1242-2688.png"},{"revision":"6e02c5f406e36883e34fec140c56eeb8","url":"icons/apple-splash-1284-2778.png"},{"revision":"a177b2d700a3c1a557efe8c51961deba","url":"icons/apple-splash-1334-750.png"},{"revision":"e1f607ef88f5d9f7e872a7a7210639aa","url":"icons/apple-splash-1536-2048.png"},{"revision":"6ff28f97832ca70ce6019075bb863ea6","url":"icons/apple-splash-1620-2160.png"},{"revision":"3c355d37ffb2c4dcab34e778ec476273","url":"icons/apple-splash-1668-2224.png"},{"revision":"229d1e4c6c7a88043a3b8ec836f235de","url":"icons/apple-splash-1668-2388.png"},{"revision":"e410c932dbbd6f315b8af02bc07e46c2","url":"icons/apple-splash-1792-828.png"},{"revision":"b7670f302f1831b70db7b1d317861ecf","url":"icons/apple-splash-1920-1080.png"},{"revision":"db720d34c18f1fbb22d10e2fef02ae2a","url":"icons/apple-splash-2048-1536.png"},{"revision":"403698f72e0d6c03c5a68ca45e788450","url":"icons/apple-splash-2048-2732.png"},{"revision":"36f435753ec7db5c90f8f4f1fe5c31c3","url":"icons/apple-splash-2160-1620.png"},{"revision":"3c497eb35665da0bd67e62235042a689","url":"icons/apple-splash-2208-1242.png"},{"revision":"ad013cefa4c41aa25c769c81038ce795","url":"icons/apple-splash-2224-1668.png"},{"revision":"4a565b5009081f64056adf8d81b96705","url":"icons/apple-splash-2388-1668.png"},{"revision":"c512515e6c175a9d8ac5004617e9eabc","url":"icons/apple-splash-2436-1125.png"},{"revision":"ff6ee3e7462bde5041de5bc79f613b70","url":"icons/apple-splash-2532-1170.png"},{"revision":"b387a8da101b26750026d07b419b8c4c","url":"icons/apple-splash-2688-1242.png"},{"revision":"598726da533c5b8d31d43de26155352a","url":"icons/apple-splash-2732-2048.png"},{"revision":"342fd9f7b6a2d7b42dac096b704c35ef","url":"icons/apple-splash-2778-1284.png"},{"revision":"bd2b6ed9afeb06a7affbc3c06f14d904","url":"icons/apple-splash-640-1136.png"},{"revision":"94f43c88fc2b76e86020479cf8a2f362","url":"icons/apple-splash-750-1334.png"},{"revision":"8390156b93265f169f40703fd637dee9","url":"icons/apple-splash-828-1792.png"},{"revision":"450e64a451a4d83bb2058522de0e8969","url":"icons/apple-splash-dark-1080-1920.png"},{"revision":"d059f50fefc2d12ecded956ad5bc1878","url":"icons/apple-splash-dark-1125-2436.png"},{"revision":"28d3162bf8167f42e47b86844a8fb65d","url":"icons/apple-splash-dark-1136-640.png"},{"revision":"a99884d54f2c05d1e4d1091e5c6bbecd","url":"icons/apple-splash-dark-1170-2532.png"},{"revision":"4e06a8fa2ae8fd614fdf28f1b617ff95","url":"icons/apple-splash-dark-1242-2208.png"},{"revision":"d35e3dba734fa446daae65ae2e7426be","url":"icons/apple-splash-dark-1242-2688.png"},{"revision":"1748d38cb906e53ff9054e75889cfe9f","url":"icons/apple-splash-dark-1284-2778.png"},{"revision":"b018115d17498a7e2969ae5e04baa11b","url":"icons/apple-splash-dark-1334-750.png"},{"revision":"5fc7cf387a7feac3750e5a7ab052266a","url":"icons/apple-splash-dark-1536-2048.png"},{"revision":"33b7f0ef409571cc91b5338ca215a546","url":"icons/apple-splash-dark-1620-2160.png"},{"revision":"d98e7c449c5c3c34925238a00e9955ab","url":"icons/apple-splash-dark-1668-2224.png"},{"revision":"33ccb52cb3ef3b7f0d5a77339a185ed6","url":"icons/apple-splash-dark-1668-2388.png"},{"revision":"d264eddee19e9e0bdb288de2d86bc53d","url":"icons/apple-splash-dark-1792-828.png"},{"revision":"e8678f814727bcaf8e89bd25c5a6b481","url":"icons/apple-splash-dark-1920-1080.png"},{"revision":"57fd21d7ed249c3f3da9af3a03fceb9e","url":"icons/apple-splash-dark-2048-1536.png"},{"revision":"53009a1b060761a58c1e6fb381ead2a2","url":"icons/apple-splash-dark-2048-2732.png"},{"revision":"15b3d40f9e09d55f2e8a6564a76ad5c4","url":"icons/apple-splash-dark-2160-1620.png"},{"revision":"d028d070f533d8421b20d5341cb0069f","url":"icons/apple-splash-dark-2208-1242.png"},{"revision":"60b464d78763884ef644e378b8f5920f","url":"icons/apple-splash-dark-2224-1668.png"},{"revision":"b263695a11adb6db38ab36daaa6f06cf","url":"icons/apple-splash-dark-2388-1668.png"},{"revision":"9a12d4407e6cd55b0b9e51734db9f99d","url":"icons/apple-splash-dark-2436-1125.png"},{"revision":"670fc3cabbae12ed738e7b53f7299ae1","url":"icons/apple-splash-dark-2532-1170.png"},{"revision":"f5eb829f5fdcf97e10297e92bd406e20","url":"icons/apple-splash-dark-2688-1242.png"},{"revision":"68b845f3c4c3ae9ad006bce1e32b2cbd","url":"icons/apple-splash-dark-2732-2048.png"},{"revision":"816d338d74cae7a49f174dcdbe98e5a8","url":"icons/apple-splash-dark-2778-1284.png"},{"revision":"af928dd7ee7d5b478ceac745d6358936","url":"icons/apple-splash-dark-640-1136.png"},{"revision":"c80811afd43dfaafd3054f83151ad71d","url":"icons/apple-splash-dark-750-1334.png"},{"revision":"2b87f8b7b839bd5a4afffdf38c5e9d12","url":"icons/apple-splash-dark-828-1792.png"},{"revision":"8fa945465910d4c11d00c91dbe325f33","url":"icons/apple-touch-icon.png"},{"revision":"ea81c765e34ca337e5f9cc1527a2d9cd","url":"icons/favicon-192x192.png"},{"revision":"aa463160f25ec082c7388ce68864cb99","url":"icons/favicon-196x196.png"},{"revision":"7a6e86bc78d1655ffb445195271423f1","url":"icons/favicon-512x512.png"},{"revision":"a19af99dbd4048d98c3c122099118469","url":"icons/og-banner.jpg"},{"revision":"f738c4576f27896989060b18058f70d9","url":"icons/safari-pinned-tab.svg"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"images/favicon.png"},{"revision":"0aeca8b09888accfccf11976b34c4e64","url":"img/loading.gif"},{"revision":"4f03bd8dec67211ade8abdab39dcbf4a","url":"img/video-play.png"},{"revision":"699d005153517ee4264615dd1e4e2b64","url":"img/vimeo-play.png"},{"revision":"96bc9d7e27d077372cc0bc9524c500e6","url":"img/youtube-play.png"},{"revision":"ab14c63251bd757ab10d8d7e6243428e","url":"javascripts/bundle.d663aa10.min.js"},{"revision":"d5ff07dead5993d128cfc3e54e27e057","url":"javascripts/bundle.d663aa10.min.js.map"},{"revision":"97ae313eadb7aeab8156ccf8470012c9","url":"javascripts/lightgallery.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"javascripts/lunr/min/lunr.fr.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"javascripts/lunr/min/lunr.sv.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"javascripts/lunr/min/lunr.vi.min.js"},{"revision":"982caada2fd97756b05b2cd1b8bf5f8a","url":"javascripts/lunr/tinyseg.js"},{"revision":"6ceac1ed613190e1a07556f85db1cd0f","url":"javascripts/theme-switcher.js"},{"revision":"136d4ff2dc7d58f7c5fb4fbff00ed5cc","url":"javascripts/workers/search.217ffd95.min.js"},{"revision":"874caf75c854b2e8221b6f0e8a99dde1","url":"javascripts/workers/search.217ffd95.min.js.map"},{"revision":"f216c9f755ca3131d5d8abff3eee5193","url":"stylesheets/lg-fb-comment-box.min.css"},{"revision":"d5097a7d934c1e77fff770ca20897885","url":"stylesheets/lg-transitions.min.css"},{"revision":"a16e59257986febeb0baaee33f5b0a78","url":"stylesheets/lightgallery.min.css"},{"revision":"c62832d44cf606fefcd998f7b3add52d","url":"stylesheets/main.f94e6fed.min.css"},{"revision":"2f6063dc5ffc151b81b2069cc6452ffb","url":"stylesheets/main.f94e6fed.min.css.map"},{"revision":"5b7abc8745f94e43c6623957af412469","url":"stylesheets/palette.7b4eb923.min.css"},{"revision":"2cf9d33a0fe820f3e74fd71d6257fa93","url":"stylesheets/palette.7b4eb923.min.css.map"},{"revision":"2","url":"404.html"},{"revision":"2","url":"offline.html"}])
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
      statuses: [200]
    }),
    {cacheKeyWillBeUsed}
  ]
})

registerRoute(
  ({ request }) => request.mode === "navigate",
  navigationStrategy
)

warmStrategyCache({
  urls: ["/"],
  strategy: navigationStrategy
})

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
        statuses: [200]
      })
    ]
  }),
)

registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|ico|mp4)$/,
  // Use the cache if it's available.
  new CacheFirst({
    cacheName: "image-cache",
    fetchOptions: {
      credentials: "include"
    },
    plugins: [
      new ExpirationPlugin({
        // Cache only 50 images.
        maxEntries: 50,
        // Cache for a maximum of a day.
        maxAgeSeconds: 24 * 60 * 60
      })
    ]
  })
)

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
  ({ url }) => url.origin === "https://fonts.googleapis.com",
  new StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets"
  })
)

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  ({ url }) => url.origin === "https://fonts.gstatic.com",
  new CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
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

addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    skipWaiting()
  }
})
