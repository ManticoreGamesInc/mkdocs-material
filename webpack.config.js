/* eslint-disable camelcase */
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

const fs = require("fs")
const cssmin = require("cssmin")
const path = require("path")
const html = require("html-minifier")
const webpack = require("webpack")

/* ----------------------------------------------------------------------------
 * Plugins
 * ------------------------------------------------------------------------- */

const CopyPlugin = require("copy-webpack-plugin")
const EventHooksPlugin = require("event-hooks-webpack-plugin")
const { CallbackTask } = require("event-hooks-webpack-plugin/lib/tasks")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-3-webpack-plugin")
const ImageminPlugin = require("imagemin-webpack-plugin").default
const ManifestPlugin = require("webpack-manifest-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")
const WebpackPwaManifest = require("webpack-pwa-manifest")

/* ----------------------------------------------------------------------------
 * Configuration
 * ------------------------------------------------------------------------- */

module.exports = (_env, args) => { // eslint-disable-line complexity
  const config = {
    mode: args.mode,

    /* Entrypoints */
    entry: {

      /* Custom Modernizr build */
      "assets/javascripts/modernizr": path.resolve(
        __dirname, "src/assets/javascripts/modernizr.js"
      ),

      /* Application */
      "assets/javascripts/application": path.resolve(
        __dirname, "src/assets/javascripts/application.js"
      ),

      /* dark-mode */
      "assets/javascripts/dark-mode": path.resolve(
        __dirname, "src/assets/javascripts/dark-mode.js"
      )
    },

    /* Loaders */
    module: {
      rules: [

        /* Babel ES6 transformations */
        {
          test: /\.jsx?$/,
          use: "babel-loader",
          exclude: /\/node_modules\//
        },

        /* Custom Modernizr build */
        {
          test: /\.modernizr-autorc$/,
          use: "modernizr-auto-loader"
        },

        /* SASS stylesheets */
        {
          test: /\.scss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: `[name]${
                  args.mode === "production" ? ".[md5:hash:hex:8]" : ""
                }.css`,
                outputPath: "assets/stylesheets",
                publicPath: path.resolve(__dirname, "material")
              }
            },
            "extract-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: args.mode !== "production"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [
                  require("autoprefixer")(),
                  require("css-mqpacker")
                ],
                sourceMap: args.mode !== "production"
              }
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: [
                  "node_modules/modularscale-sass/stylesheets",
                  "node_modules/material-design-color",
                  "node_modules/material-shadows"
                ],
                sourceMap: args.mode !== "production",
                sourceMapContents: true
              }
            }
          ]
        },

        /* Cache busting for SVGs */
        {
          test: /\.svg$/,
          use: `file-loader?name=[path][name]${
            args.mode === "production" ? ".[md5:hash:hex:8]" : ""
          }.[ext]&context=./src`
        }
      ]
    },

    /* Output */
    output: {
      path: path.resolve(__dirname, "material"),
      filename: `[name]${args.mode === "production" ? ".[chunkhash]" : ""}.js`,
      hashDigestLength: 8,
      libraryTarget: "window"
    },

    /* Plugins */
    plugins: [

      new WorkboxPlugin.InjectManifest({
        swSrc: "src/sw.js",
        globDirectory: "../site/",
        globPatterns: ["404.html", "offline.html", "assets/fonts/**/*", "assets/webfonts/**/*", "assets/icons/*"]
      }),

      new WebpackPwaManifest({
        filename: "manifest.json",
        name: "Core Creator Hub",
        short_name: "Core Hub",
        start_url: "/?utm_source=web_app_manifest",
        publicPath: "https://docs.coregames.com/",
        display: "standalone",
        description: "Documentation for the Core Platform",
        theme_color: "#16191F",
        background_color: "#16191F",
        crossorigin: "use-credentials",
        inject: true,
        orientation: "any",
        fingerprints: false,
        icons: [
          {
            src: path.resolve("src/assets/icons/favicon-192x192.png"),
            size: "192x192"
          },
          {
            src: path.resolve("src/assets/icons/favicon-512x512.png"),
            size: "512x512"
          },
          {
            src: path.resolve("src/assets/icons/favicon-512x512.png"),
            size: "512x512",
            purpose: "maskable"
          }
        ]
      }),

      /* Provide JSX helper */
      new webpack.ProvidePlugin({
        JSX: path.resolve(__dirname, "src/assets/javascripts/providers/jsx.js")
      }),

      /* Copy and transform static assets */
      new CopyPlugin([

        /* Copy web font files */
        {
          context: "src",
          from: "assets/fonts/**/*",
          ignore: ["**/*.css"]
        },

        /* Copy font-awesome web font files */
        {
          context: "src",
          from: "assets/webfonts/**/*",
          ignore: ["**/*.css"]
        },

        /* Copy and minify web font stylesheets */
        {
          context: "src",
          from: "assets/fonts/*.css",
          transform: content => cssmin(content.toString())
        },

        /* Copy lightbox stylesheets */
        {
          context: "node_modules/lightgallery.js/dist/css/",
          from: "*.css",
          to: "assets/stylesheets/"
        },

        /* Copy lightbox js */
        {
          context: "node_modules/lightgallery.js/dist/js/",
          from: "*.min.js",
          to: "assets/javascripts/"
        },

        /* Copy lightbox js */
        {
          context: "node_modules/lightgallery.js/dist/fonts/",
          from: "lg.*",
          to: "assets/fonts/"
        },

        /* Copy lightbox js */
        {
          context: "node_modules/lightgallery.js/dist/img/",
          from: "*",
          to: "assets/img/"
        },

        /* Copy images without cache busting */
        {
          context: "src",
          from: "assets/images/*.{ico,png}"
        },

        {
          context: "src",
          from: "assets/icons/*"
        },

        /* Copy configuration */
        {
          context: "src",
          from: "**/*.{py,yml}"
        },

        /* Copy and minify HTML */
        {
          context: "src",
          from: "**/*.html",
          transform: content => {
            const metadata = require(path.resolve(__dirname, "package.json"))
            const banner =
              "{#-\n" +
              "  This file was automatically generated - do not edit\n" +
              "-#}\n"
            return banner + html.minify(content.toString(), {
              collapseBooleanAttributes: true,
              includeAutoGeneratedTags: false,
              minifyCSS: true,
              minifyJS: true,
              removeComments: true,
              removeScriptTypeAttributes: false,
              removeStyleLinkTypeAttributes: false
            })

              /* Remove empty lines without collapsing everything */
              .replace(/^\s*[\r\n]/gm, "")

              /* Write theme version into template */
              .replace("$md-name$", metadata.name)
              .replace("$md-version$", metadata.version)
          }
        }
      ])
    ],

    /* Module resolver */
    resolve: {
      modules: [
        path.resolve(__dirname, "node_modules")
      ],
      extensions: [".js", ".jsx", ".scss"],
      alias: {
        modernizr$: path.resolve(__dirname, ".modernizr-autorc")
      }
    },

    /* Sourcemaps */
    devtool: args.mode !== "production" ? "inline-source-map" : "",

    /* Optimizations */
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: /^!/
            }
          }
        }),
        new OptimizeCSSAssetsPlugin()
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "all",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0
          },
          modernizr: {
            test: "src/assets/javascripts/modernizr.js",
            chunks: "all",
            name: "modernizr",
            priority: 10,
            enforce: true
          }
        }
      }
    }
  }

  /* Production compilation */
  if (args.mode === "production") {
    config.plugins.push(

      /* Minify images */
      new ImageminPlugin({
        test: /\.(ico|png|svg)$/i,
        svgo: {
          plugins: [
            { cleanupIDs: false },
            { removeViewBox: false }
          ]
        }
      }),

      /* Write manifest */
      new ManifestPlugin({
        fileName: "../manifest.json",

        /* This is an ugly workaround for the fact that the manifest plugin
           doesn't handle multiple chunks. See http://bit.ly/2BbfER9 */
        map(file) {
          file.name = file.path.replace(/\.[a-z0-9].+\.(css|js|svg)/i, ".$1")
          return file
        }
      }),

      /* Apply manifest */
      new EventHooksPlugin({
        afterEmit: new CallbackTask((compilation, cb) => {
          const manifest = require(path.resolve("manifest.json"))
          Object.keys(compilation.assets).forEach(name => {
            if (name.match(/\.html/)) {
              const asset = compilation.assets[name]
              const replaced = Object.keys(manifest).reduce((source, key) => {
                return source.replace(key, manifest[key])
              }, asset.source())
              fs.writeFileSync(asset.existsAt, replaced)
            }
          })
          cb()
        })
      })
    )
  }

  /* Oh my god, that was a hell of a setup */
  return config
}
