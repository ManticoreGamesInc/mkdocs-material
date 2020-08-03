/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sw.js":
/*!*******************!*\
  !*** ./src/sw.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable require-jsdoc */\n/* eslint-disable no-unused-vars */\n/* eslint-disable array-callback-return */\n/* eslint-disable no-underscore-dangle */\n/* eslint-disable no-undef */\n\nimportScripts(\"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js\")\n\nworkbox.precaching.cleanupOutdatedCaches()\nworkbox.precaching.precacheAndRoute([{'revision':'1','url':'404.html'},{'revision':'ecff11700aad0000cf3503f537d1df17','url':'assets/fonts/lg.eot'},{'revision':'c066c5448562b3ccaefb6408ce4b4ae1','url':'assets/fonts/lg.svg'},{'revision':'4fe6f9caff8b287170d51d3d71d5e5c6','url':'assets/fonts/lg.ttf'},{'revision':'5fd4c338c1a1b1eeeb2c7b0a0967773d','url':'assets/fonts/lg.woff'},{'revision':'bdee926e07d18f28da1844e1a5ac7c43','url':'assets/icons/apple-splash-1125-2436.png'},{'revision':'0ca06f8e90f99a23f16536fd2449a636','url':'assets/icons/apple-splash-1136-640.png'},{'revision':'b9208832cd50032efcea09714e94b1ab','url':'assets/icons/apple-splash-1242-2208.png'},{'revision':'b51e11cbca0277e7783dfdcf948da737','url':'assets/icons/apple-splash-1242-2688.png'},{'revision':'b87422c8041cf3f0538eaa7e026877c9','url':'assets/icons/apple-splash-1334-750.png'},{'revision':'24c889b05be6c9e6771977ab1959a192','url':'assets/icons/apple-splash-1536-2048.png'},{'revision':'9cd10030fec24c2b73520b4afd65c81c','url':'assets/icons/apple-splash-1668-2224.png'},{'revision':'bde6c627e1a565feaaa45023d20e4de0','url':'assets/icons/apple-splash-1668-2388.png'},{'revision':'a7adc24440409f65106f8208153dda6a','url':'assets/icons/apple-splash-1792-828.png'},{'revision':'d03c56c174023ba1e321afe86ad6fed2','url':'assets/icons/apple-splash-2048-1536.png'},{'revision':'e9f6f39830c744939eb4f9f0d71033d9','url':'assets/icons/apple-splash-2048-2732.png'},{'revision':'952f6499b82aa7f027120eba8810139b','url':'assets/icons/apple-splash-2208-1242.png'},{'revision':'b059438b2f5b609d2dc2cf7beca7e235','url':'assets/icons/apple-splash-2224-1668.png'},{'revision':'0c0fdf539a0df191f7f7e0c3068ce78b','url':'assets/icons/apple-splash-2388-1668.png'},{'revision':'3710c65a1bef50f39fb43328dffe7417','url':'assets/icons/apple-splash-2436-1125.png'},{'revision':'701fc1826c55a9b2958e5e5860eef179','url':'assets/icons/apple-splash-2688-1242.png'},{'revision':'67191c26bdc5daf77f006b551b934a97','url':'assets/icons/apple-splash-2732-2048.png'},{'revision':'747b8d551c1434f672e2cfead4ad0cbc','url':'assets/icons/apple-splash-640-1136.png'},{'revision':'5335f11c58a459c9dc20fa86d79a9f37','url':'assets/icons/apple-splash-750-1334.png'},{'revision':'5e0008a5d0be79aa8b821b91bf56ee9f','url':'assets/icons/apple-splash-828-1792.png'},{'revision':'e8042c3c8c6b214a23a52f0faf36bae6','url':'assets/icons/apple-splash-dark-1125-2436.png'},{'revision':'8428c47986be734769734aa9c54aebf3','url':'assets/icons/apple-splash-dark-1136-640.png'},{'revision':'7460e47895e55dd0b89fa66ac63222e1','url':'assets/icons/apple-splash-dark-1242-2208.png'},{'revision':'6f50f3a693dcca1e5a8cdd98eacbdf12','url':'assets/icons/apple-splash-dark-1242-2688.png'},{'revision':'cf317467093f7bca9952b6b432053529','url':'assets/icons/apple-splash-dark-1334-750.png'},{'revision':'53508e8b0a70249448daac56330e3e64','url':'assets/icons/apple-splash-dark-1536-2048.png'},{'revision':'d5f137182bce81f0b6475b50ffc358b8','url':'assets/icons/apple-splash-dark-1668-2224.png'},{'revision':'fc773287f794070897143f327d655f58','url':'assets/icons/apple-splash-dark-1668-2388.png'},{'revision':'c2d86ec1399982fa29201dc53596eef1','url':'assets/icons/apple-splash-dark-1792-828.png'},{'revision':'41357fbd3b6094861193d112af62f0b6','url':'assets/icons/apple-splash-dark-2048-1536.png'},{'revision':'9d1a8474e5b4de9f031513b966553a1e','url':'assets/icons/apple-splash-dark-2048-2732.png'},{'revision':'214246f8c1f6d06fd61a6a91d9b30015','url':'assets/icons/apple-splash-dark-2208-1242.png'},{'revision':'f54c960d7cf01cddd7bdfb4593c8cb47','url':'assets/icons/apple-splash-dark-2224-1668.png'},{'revision':'e595e63e4306d87c3244899a15d46c40','url':'assets/icons/apple-splash-dark-2388-1668.png'},{'revision':'7b1f12a86457bc4dbfb1288057a6c9af','url':'assets/icons/apple-splash-dark-2436-1125.png'},{'revision':'5d68bd45e8535fd49632cbd3ab213a94','url':'assets/icons/apple-splash-dark-2688-1242.png'},{'revision':'460856c099d7d8783867c2d593377db4','url':'assets/icons/apple-splash-dark-2732-2048.png'},{'revision':'0dd7f70defd7e39c32c99266e8df372e','url':'assets/icons/apple-splash-dark-640-1136.png'},{'revision':'fb84a071c7afc2e91e59977e508766ef','url':'assets/icons/apple-splash-dark-750-1334.png'},{'revision':'f7c287375f41393f27ac8b821306d0a3','url':'assets/icons/apple-splash-dark-828-1792.png'},{'revision':'b41712314e4c9f0d129039a676c24d9f','url':'assets/icons/apple-touch-icon-120.png'},{'revision':'f96bf89eed61ad847b64bc2e99149770','url':'assets/icons/apple-touch-icon-152.png'},{'revision':'5aa1b8ea8abb072deae86d347bbffb6e','url':'assets/icons/apple-touch-icon-167.png'},{'revision':'acdbcbc7e2103a7f1e34752eb342a82e','url':'assets/icons/apple-touch-icon.png'},{'revision':'d51193cc7ec47e4492f866adc610d074','url':'assets/icons/browserconfig.xml'},{'revision':'05886a3f651698fc46afcba09bddd19f','url':'assets/icons/favicon-16x16.png'},{'revision':'bdc150c734944f71fb43d52f4fdf03c3','url':'assets/icons/favicon-192x192.png'},{'revision':'563c09ebb7dae85042747cd0e080bcda','url':'assets/icons/favicon-196x196.png'},{'revision':'a8d7c93aa9f202d90ef73f7e0ffba6db','url':'assets/icons/favicon-32x32.png'},{'revision':'57c8aaf4db17b2393048ebecaa6eb13f','url':'assets/icons/favicon-512x512.png'},{'revision':'4b6fd95329e208975e9a64ea4c58becb','url':'assets/icons/icon_192x192.png'},{'revision':'091c976764b5bf735536005ec98e2fe3','url':'assets/icons/icon_512x512.png'},{'revision':'388b14ea1556004dc74f15d5c64fe110','url':'assets/icons/mstile-150x150.png'},{'revision':'f738c4576f27896989060b18058f70d9','url':'assets/icons/safari-pinned-tab.svg'},{'revision':'370ef648333a78cf59e253f1322c6fdc','url':'assets/images/favicon.png'},{'revision':'0aeca8b09888accfccf11976b34c4e64','url':'assets/img/loading.gif'},{'revision':'4f03bd8dec67211ade8abdab39dcbf4a','url':'assets/img/video-play.png'},{'revision':'699d005153517ee4264615dd1e4e2b64','url':'assets/img/vimeo-play.png'},{'revision':'96bc9d7e27d077372cc0bc9524c500e6','url':'assets/img/youtube-play.png'},{'revision':'ecefba9d787a95b72514c2146a33be91','url':'assets/javascripts/bundle.js'},{'revision':'a131a4b6deee3ee028398b2fd4975c35','url':'assets/javascripts/lightgallery.min.js'},{'revision':'fbf5f29e41be25b2c74a1536bec8affa','url':'assets/javascripts/theme-switcher.js'},{'revision':'1da393112c2589de5785f66dca5d41d0','url':'assets/javascripts/vendor.js'},{'revision':'2640f6ea85d70cf0f9e67bf6b9cde527','url':'assets/manifest.json'},{'revision':'f216c9f755ca3131d5d8abff3eee5193','url':'assets/stylesheets/lg-fb-comment-box.min.css'},{'revision':'a3330c0ba52c1c1f912fa21966ba7079','url':'assets/stylesheets/lg-transitions.min.css'},{'revision':'77eb6ae63c63c88c5e7a10b6c9570c54','url':'assets/stylesheets/lightgallery.min.css'},{'revision':'7d6d66969b37695acfa1657faa463f6f','url':'assets/stylesheets/main.css'},{'revision':'3ed42eae2aee7fa37cf748ffae6d0ac0','url':'assets/stylesheets/overrides.css'},{'revision':'cd292683dd33342fafbc54f9ded00930','url':'assets/stylesheets/palette.css'},{'revision':'1','url':'offline.html'}])\nworkbox.core.clientsClaim()\nworkbox.googleAnalytics.initialize()\n\nworkbox.routing.registerRoute(\n  /\\.(?:js|json)$/,\n  new workbox.strategies.StaleWhileRevalidate({\n    cacheName: \"js-cache\",\n    fetchOptions: {\n      credentials: \"include\"\n    }\n  })\n)\n\nfunction cacheKeyWillBeUsed({ request }) {\n  const url = new URL(request.url)\n  url.pathname = url.pathname.replace(/\\/index\\.html$/, \"/\")\n  url.pathname = url.pathname.replace(/\\.html$/, \"/\")\n  return url.href\n}\n\nconst networkFirstStrategy = new workbox.strategies.NetworkFirst({\n  cacheName: \"docs-cache\",\n  fetchOptions: {\n    credentials: \"include\"\n  },\n  plugins: [{ cacheKeyWillBeUsed }]\n})\n\nconst navigationRoute = new workbox.routing.NavigationRoute(networkFirstStrategy)\nworkbox.routing.registerRoute(navigationRoute)\nworkbox.routing.setCatchHandler(({ event }) => {\n  switch (event.request.destination) {\n    case \"document\":\n      return caches.match(workbox.precaching.createHandlerBoundToURL(\"offline.html\"))\n\n    default:\n      // If we don't have a fallback, just return an error response.\n      return Response.error()\n  }\n})\n\nworkbox.routing.registerRoute(\n  /\\.css$/,\n  // Use cache but update in the background.\n  new workbox.strategies.StaleWhileRevalidate({\n    cacheName: \"css-cache\",\n    fetchOptions: {\n      credentials: \"include\"\n    }\n  })\n)\n\nworkbox.routing.registerRoute(\n  /\\.(?:png|jpg|jpeg|svg|gif|ico|mp4)$/,\n  // Use the cache if it's available.\n  new workbox.strategies.CacheFirst({\n    cacheName: \"image-cache\",\n    fetchOptions: {\n      credentials: \"include\"\n    },\n    plugins: [\n      new workbox.expiration.ExpirationPlugin({\n        // Cache only 50 images.\n        maxEntries: 50,\n        // Cache for a maximum of a day.\n        maxAgeSeconds: 24 * 60 * 60\n      })\n    ]\n  })\n)\n\n// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.\nworkbox.routing.registerRoute(/.*(?:googleapis)\\.com.*$/,\n  new workbox.strategies.StaleWhileRevalidate({\n    cacheName: \"googleapis-cache\"\n  })\n)\n\n// Cache the underlying font files with a cache-first strategy for 1 year.\nworkbox.routing.registerRoute(\n  /^https:\\/\\/fonts\\.gstatic\\.com/,\n  new workbox.strategies.CacheFirst({\n    cacheName: \"google-fonts-webfonts\",\n    fetchOptions: {\n      credentials: \"include\"\n    },\n    plugins: [\n      new workbox.cacheableResponse.CacheableResponsePlugin({\n        statuses: [0, 200]\n      }),\n      new workbox.expiration.ExpirationPlugin({\n        maxAgeSeconds: 60 * 60 * 24 * 365,\n        maxEntries: 30\n      })\n    ]\n  })\n)\n\naddEventListener(\"message\", event => {\n  if (event.data && event.data.type === \"SKIP_WAITING\") {\n    skipWaiting()\n  }\n})\n\n\n//# sourceURL=webpack:///./src/sw.js?");

/***/ })

/******/ });