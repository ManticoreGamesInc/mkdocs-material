const glob = require("glob")
const path = require("path")

const {injectManifest} = require("workbox-build")

const outputFile = glob.sync("material/sw.*.min.js", {
  ignore: [
    'material/sw.*.min.js.map',
  ],
}).map(function(path) { return path } )

const swSrc = path.resolve("src/sw.js")
const swDest = path.resolve("material/sw.js")

injectManifest({
  swSrc,
  swDest,
  globDirectory: path.resolve("material/assets"),
  globPatterns: ["**"],
  additionalManifestEntries: [{url: "404.html", revision: "2" }, {url: "offline.html", revision: "2" }]
}).then(({count, size}) => {
  console.log(`Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`)
})
