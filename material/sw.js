!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js"),workbox.precaching.cleanupOutdatedCaches(),workbox.precaching.precacheAndRoute([{'revision':'1','url':'404.html'},{'revision':'2ec2cb2199d4d881e6a6ad86690f6add','url':'assets/fonts/lg.svg'},{'revision':'f4292655f93dd12d9b8e4fc067ef2489','url':'assets/fonts/lg.ttf'},{'revision':'1fbfd4bcffccb94e8e8a5ea70616b296','url':'assets/fonts/lg.woff'},{'revision':'9917f9fe657e1049138d7d58d83fb0ed','url':'assets/icons/apple-splash-1080-1920.png'},{'revision':'6744e4211b7b951451dab29c9ce9f4f8','url':'assets/icons/apple-splash-1125-2436.png'},{'revision':'36e50c4c65af008730305ab01b6d9c97','url':'assets/icons/apple-splash-1136-640.png'},{'revision':'2f234391f23eec316ab6823499d6d0d1','url':'assets/icons/apple-splash-1242-2688.png'},{'revision':'e9739fa0793a78a39ed4dda94e24a220','url':'assets/icons/apple-splash-1334-750.png'},{'revision':'8fba8fb25190c5de260364ced6f40d6f','url':'assets/icons/apple-splash-1536-2048.png'},{'revision':'2c05c5dcbdb2f147fa48498af3e1d868','url':'assets/icons/apple-splash-1620-2160.png'},{'revision':'16396475168305f220aaf088ecbf2203','url':'assets/icons/apple-splash-1668-2224.png'},{'revision':'10b3f3729cd39188465c0dcb5eb393d8','url':'assets/icons/apple-splash-1668-2388.png'},{'revision':'7966fa78074d021813c5d42ca5aa2ca4','url':'assets/icons/apple-splash-1792-828.png'},{'revision':'e66e84c76e8977859fc7fd100d0eac19','url':'assets/icons/apple-splash-1920-1080.png'},{'revision':'dcab7ed7b7c41aea7f49301ab654c025','url':'assets/icons/apple-splash-2048-1536.png'},{'revision':'c14ac441d0a4a42806e2c092bfd3a6f8','url':'assets/icons/apple-splash-2048-2732.png'},{'revision':'9c99f4cc5045201d96d178828651f286','url':'assets/icons/apple-splash-2160-1620.png'},{'revision':'6b7468cebea7334ea3d8f8d6007a4cfa','url':'assets/icons/apple-splash-2224-1668.png'},{'revision':'84fdab0869977076ccde55b251d6332a','url':'assets/icons/apple-splash-2388-1668.png'},{'revision':'a8272a8d53d737c0049430b274bc30d1','url':'assets/icons/apple-splash-2436-1125.png'},{'revision':'b480d033bc4f661a80dee30c848107f5','url':'assets/icons/apple-splash-2688-1242.png'},{'revision':'3405649bdd21c768de580ae1e70a0252','url':'assets/icons/apple-splash-2732-2048.png'},{'revision':'53f065a9899a7e6784e8de1dc6a151ce','url':'assets/icons/apple-splash-640-1136.png'},{'revision':'ab6cafeed0e86368633970a88d42f4c1','url':'assets/icons/apple-splash-750-1334.png'},{'revision':'25eaad831aec631c253416a3a789b27d','url':'assets/icons/apple-splash-828-1792.png'},{'revision':'71f35a31eeb91e1b0ebe842f06c1a7d7','url':'assets/icons/apple-splash-dark-1080-1920.png'},{'revision':'20f2035158c6fb72f5f3b4846c314d24','url':'assets/icons/apple-splash-dark-1125-2436.png'},{'revision':'10768605ca3602fbfecd5be9227af8e8','url':'assets/icons/apple-splash-dark-1136-640.png'},{'revision':'d8c5244401c8598a231aef40eb632767','url':'assets/icons/apple-splash-dark-1242-2688.png'},{'revision':'68f24d70c5b723ddc28959c3315a2256','url':'assets/icons/apple-splash-dark-1334-750.png'},{'revision':'ab03582c04fb5b8f46aa4515d1d4baf1','url':'assets/icons/apple-splash-dark-1536-2048.png'},{'revision':'2450541fa2d11649131dc3b35e061c49','url':'assets/icons/apple-splash-dark-1620-2160.png'},{'revision':'1093aab6223f18367abe90e6b6b19cb4','url':'assets/icons/apple-splash-dark-1668-2224.png'},{'revision':'00faa1847d69df78c8026a5551e7a825','url':'assets/icons/apple-splash-dark-1668-2388.png'},{'revision':'651416af6c5e0c3b2312a6b57c9fd5de','url':'assets/icons/apple-splash-dark-1792-828.png'},{'revision':'72e035c880332a7480e9687a936c1b6a','url':'assets/icons/apple-splash-dark-1920-1080.png'},{'revision':'88b1ca566f9aea678c070c02ceaf492a','url':'assets/icons/apple-splash-dark-2048-1536.png'},{'revision':'b3674cde1f84041e5362d815a716f8c9','url':'assets/icons/apple-splash-dark-2048-2732.png'},{'revision':'f226f033b8ec286177cd43296632acb2','url':'assets/icons/apple-splash-dark-2160-1620.png'},{'revision':'7b2035bd44090ade08b2deacc0901267','url':'assets/icons/apple-splash-dark-2224-1668.png'},{'revision':'171cc24f5d5c33bd07419421668d2403','url':'assets/icons/apple-splash-dark-2388-1668.png'},{'revision':'7783ebbc843c77b2ab82bea5fc9da1a2','url':'assets/icons/apple-splash-dark-2436-1125.png'},{'revision':'231ebbbf7dde670a6d13fc243ea34bee','url':'assets/icons/apple-splash-dark-2688-1242.png'},{'revision':'af9e60820af24d4aeb52b651cd2a4f2a','url':'assets/icons/apple-splash-dark-2732-2048.png'},{'revision':'bca3f24e82a997d6c5bf97d5de0094bb','url':'assets/icons/apple-splash-dark-640-1136.png'},{'revision':'e7fd9132c217ea875b5a071c98fba6ba','url':'assets/icons/apple-splash-dark-750-1334.png'},{'revision':'3d32f83e4fb2b72de1037d83059b0211','url':'assets/icons/apple-splash-dark-828-1792.png'},{'revision':'1e7b71575faedf022900c8cf6d13bad5','url':'assets/icons/apple-touch-icon-120.png'},{'revision':'92b0ec735c696cc737d8c2913d931711','url':'assets/icons/apple-touch-icon-152.png'},{'revision':'db208d98620e7e843eb0607dbd5ac14e','url':'assets/icons/apple-touch-icon-167.png'},{'revision':'b01296027d1c5074945c53b8597f0df2','url':'assets/icons/apple-touch-icon.png'},{'revision':'020170176f5006ad6dfff0aeea6675e5','url':'assets/icons/favicon-192x192.png'},{'revision':'c82e7d89224c20a3811a058365e643fc','url':'assets/icons/favicon-196x196.png'},{'revision':'ff00adb07007fe4f9b4b1680707af8e6','url':'assets/icons/favicon-512x512.png'},{'revision':'10542dcbfd303b8d0aa371b8329daeff','url':'assets/icons/icon_192x192.png'},{'revision':'0a7d8449d26ca4f19125b5d37076aaa2','url':'assets/icons/icon_512x512.png'},{'revision':'f738c4576f27896989060b18058f70d9','url':'assets/icons/safari-pinned-tab.svg'},{'revision':'370ef648333a78cf59e253f1322c6fdc','url':'assets/images/favicon.png'},{'revision':'0aeca8b09888accfccf11976b34c4e64','url':'assets/img/loading.gif'},{'revision':'4f03bd8dec67211ade8abdab39dcbf4a','url':'assets/img/video-play.png'},{'revision':'699d005153517ee4264615dd1e4e2b64','url':'assets/img/vimeo-play.png'},{'revision':'96bc9d7e27d077372cc0bc9524c500e6','url':'assets/img/youtube-play.png'},{'revision':null,'url':'assets/javascripts/bundle.6ced434e.min.js'},{'revision':'97ae313eadb7aeab8156ccf8470012c9','url':'assets/javascripts/lightgallery.min.js'},{'revision':'5abba6edb5a7c6bb669a208bf784ca8b','url':'assets/javascripts/lunr/min/lunr.ar.min.js'},{'revision':'cb5c7deacc09fdef5ba23a484697a7c4','url':'assets/javascripts/lunr/min/lunr.da.min.js'},{'revision':'d8ad86c7d3f64f0a2f933a6af0d9bb90','url':'assets/javascripts/lunr/min/lunr.de.min.js'},{'revision':'c3dd5e22a4bbd93cea8db0a189c75507','url':'assets/javascripts/lunr/min/lunr.du.min.js'},{'revision':'e5353de9835f5a2ae223b9ca84042458','url':'assets/javascripts/lunr/min/lunr.es.min.js'},{'revision':'7e38b7aea539e5d70556e17c5eeeb27b','url':'assets/javascripts/lunr/min/lunr.fi.min.js'},{'revision':'fa552c71d8b6df7524f1faaa5ebc8501','url':'assets/javascripts/lunr/min/lunr.fr.min.js'},{'revision':'16ba822c6ba96ea3c46200b5a52e8e8f','url':'assets/javascripts/lunr/min/lunr.hu.min.js'},{'revision':'498452a1930fe4528d960aae4f716c7c','url':'assets/javascripts/lunr/min/lunr.it.min.js'},{'revision':'5623d7b1d52549da7ef6fcdff14b31f4','url':'assets/javascripts/lunr/min/lunr.ja.min.js'},{'revision':'92740e202ca53e306ab899d3c6477ce1','url':'assets/javascripts/lunr/min/lunr.jp.min.js'},{'revision':'f58ed4a6a8909ca5e997d9c14bd564f6','url':'assets/javascripts/lunr/min/lunr.multi.min.js'},{'revision':'3461b858ef55ad5fa276854c535cbae3','url':'assets/javascripts/lunr/min/lunr.nl.min.js'},{'revision':'5bbc2f5e8186556dbc1782063cfc8ee1','url':'assets/javascripts/lunr/min/lunr.no.min.js'},{'revision':'0f5a525b2bf38d1ec11cb67356773622','url':'assets/javascripts/lunr/min/lunr.pt.min.js'},{'revision':'5b1587eb20faac2c53dd11ff84425df5','url':'assets/javascripts/lunr/min/lunr.ro.min.js'},{'revision':'b238b05d00dafa7ab40299c7b8f5f46b','url':'assets/javascripts/lunr/min/lunr.ru.min.js'},{'revision':'f58cd5cb3aceec05fa133d8e47ac8b66','url':'assets/javascripts/lunr/min/lunr.stemmer.support.min.js'},{'revision':'2c22035941f0d81181afb599dc66bf4d','url':'assets/javascripts/lunr/min/lunr.sv.min.js'},{'revision':'c64da4ee31851fbae9eecb6d3c328930','url':'assets/javascripts/lunr/min/lunr.tr.min.js'},{'revision':'6f44534ba60b0ee9efab689d05e9093d','url':'assets/javascripts/lunr/min/lunr.vi.min.js'},{'revision':'3b5ae300533c0d4efc89b48d08d7acf0','url':'assets/javascripts/lunr/tinyseg.min.js'},{'revision':'fbf5f29e41be25b2c74a1536bec8affa','url':'assets/javascripts/theme-switcher.js'},{'revision':null,'url':'assets/javascripts/vendor.08c56446.min.js'},{'revision':'c242dee900bca9703545a8cadc4e5394','url':'assets/manifest.json'},{'revision':'f216c9f755ca3131d5d8abff3eee5193','url':'assets/stylesheets/lg-fb-comment-box.min.css'},{'revision':'d5097a7d934c1e77fff770ca20897885','url':'assets/stylesheets/lg-transitions.min.css'},{'revision':'a16e59257986febeb0baaee33f5b0a78','url':'assets/stylesheets/lightgallery.min.css'},{'revision':null,'url':'assets/stylesheets/main.fa05282f.min.css'},{'revision':null,'url':'assets/stylesheets/overrides.c462ebf7.min.css'},{'revision':null,'url':'assets/stylesheets/palette.e6ac0b43.min.css'},{'revision':'1','url':'offline.html'}]),workbox.core.clientsClaim(),workbox.googleAnalytics.initialize(),workbox.routing.registerRoute(/\.(?:js|json)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"js-cache",fetchOptions:{credentials:"include"}}));const o=new workbox.strategies.NetworkFirst({cacheName:"docs-cache",fetchOptions:{credentials:"include"},plugins:[{cacheKeyWillBeUsed:function({request:e}){const t=new URL(e.url);return t.pathname=t.pathname.replace(/\/index\.html$/,"/"),t.pathname=t.pathname.replace(/\.html$/,"/"),t.href}}]}),r=new workbox.routing.NavigationRoute(o);workbox.routing.registerRoute(r),workbox.routing.setCatchHandler(({event:e})=>{switch(e.request.destination){case"document":return caches.match(workbox.precaching.createHandlerBoundToURL("offline.html"));default:return Response.error()}}),workbox.routing.registerRoute(/\.css$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"css-cache",fetchOptions:{credentials:"include"}})),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico|mp4)$/,new workbox.strategies.CacheFirst({cacheName:"image-cache",fetchOptions:{credentials:"include"},plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]})),workbox.routing.registerRoute(/.*(?:googleapis)\.com.*$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"googleapis-cache"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]}),new workbox.expiration.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]})),addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&skipWaiting()})}]);
//# sourceMappingURL=sw.js.map