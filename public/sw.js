/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "29107295-861bef60fed0aa2c884e.js"
  },
  {
    "url": "29107295-861bef60fed0aa2c884e.js.map",
    "revision": "7275732447cc6fe38e0e635316d1f892"
  },
  {
    "url": "404.html",
    "revision": "4c00498c281f9e16d738d3f54046ec47"
  },
  {
    "url": "404/index.html",
    "revision": "735fe929efdd2054ce18ddab926f4b13"
  },
  {
    "url": "app-b321a805b04aac2ef52c.js"
  },
  {
    "url": "app-b321a805b04aac2ef52c.js.map",
    "revision": "4b3b94765ac586cd838496b124bc1ef7"
  },
  {
    "url": "chunk-map.json",
    "revision": "33e3c224a52559ec4e640a295def9540"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-84df01cf41babe440d0c.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-84df01cf41babe440d0c.js.map",
    "revision": "6daba81a8b333c7225d1068cb6cd56ac"
  },
  {
    "url": "component---src-pages-404-js-abbd631c3372041b2838.js"
  },
  {
    "url": "component---src-pages-404-js-abbd631c3372041b2838.js.map",
    "revision": "eb4a6da03da36224f405dd1641f5b999"
  },
  {
    "url": "component---src-pages-index-js-9fe22ae0ca1a0f1a581b.js"
  },
  {
    "url": "component---src-pages-index-js-9fe22ae0ca1a0f1a581b.js.map",
    "revision": "4608889813056433910d83485cb5a322"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-5c8228a170c182d8747c.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-5c8228a170c182d8747c.js.map",
    "revision": "8b6014f15be07def9b2585074ddccf63"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "696745a170058d6447c51f82d324ace4"
  },
  {
    "url": "framework-d8ab2f8e3f494dcb59d8.js"
  },
  {
    "url": "framework-d8ab2f8e3f494dcb59d8.js.map",
    "revision": "1ea71e81ee99192bd492c7f42622c03a"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a8768fa0024593fc83769f6d7eea224f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "ce447da956d3db11af2ea1d08f302e4a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "920cb46671e3e4b7a32073a510db938d"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "11a2b571d11eaa80e669757b0e5301e4"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "6ae06cbae3aa256fb5563759c7d35fb3"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "68beeab670f83583b11b6b59af690ce3"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "45cbb1ce06d99989cab633d188e3d57c"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "98aa2f1b88adedb53affe7bbb22d816d"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "f980bb8d72f9e1dbd114d288699c9109"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6e7946f6ce81bde93a5dbd7a62d53f48"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "46629d58ac27e1f8eb285f9aa0a385fb"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "93fb4f209a0efc3aa128bdc72fcee06a"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "static/1935c1cf2d39d8bbc9b144977e020d68/233d6/palienko.jpg"
  },
  {
    "url": "static/1935c1cf2d39d8bbc9b144977e020d68/24611/palienko.webp"
  },
  {
    "url": "static/1935c1cf2d39d8bbc9b144977e020d68/39fae/palienko.jpg"
  },
  {
    "url": "static/1935c1cf2d39d8bbc9b144977e020d68/5e647/palienko.webp"
  },
  {
    "url": "static/1935c1cf2d39d8bbc9b144977e020d68/838e0/palienko.webp"
  },
  {
    "url": "static/1935c1cf2d39d8bbc9b144977e020d68/99f85/palienko.webp"
  },
  {
    "url": "static/1935c1cf2d39d8bbc9b144977e020d68/9f658/palienko.jpg"
  },
  {
    "url": "static/1935c1cf2d39d8bbc9b144977e020d68/a091c/palienko.jpg"
  },
  {
    "url": "static/1fafe44f5039ee12ef1a452f8d8d16b6/0abe4/boxing_gloves_item_white.webp"
  },
  {
    "url": "static/1fafe44f5039ee12ef1a452f8d8d16b6/1d276/boxing_gloves_item_white.jpg"
  },
  {
    "url": "static/1fafe44f5039ee12ef1a452f8d8d16b6/2503d/boxing_gloves_item_white.jpg"
  },
  {
    "url": "static/1fafe44f5039ee12ef1a452f8d8d16b6/6d225/boxing_gloves_item_white.jpg"
  },
  {
    "url": "static/1fafe44f5039ee12ef1a452f8d8d16b6/7234b/boxing_gloves_item_white.webp"
  },
  {
    "url": "static/1fafe44f5039ee12ef1a452f8d8d16b6/7fca4/boxing_gloves_item_white.webp"
  },
  {
    "url": "static/1fafe44f5039ee12ef1a452f8d8d16b6/e553a/boxing_gloves_item_white.webp"
  },
  {
    "url": "static/1fafe44f5039ee12ef1a452f8d8d16b6/f05ac/boxing_gloves_item_white.jpg"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/05d05/mezentsev.png"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/210c1/mezentsev.webp"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/2a4de/mezentsev.png"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/403a4/mezentsev.webp"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/54d25/mezentsev.webp"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/630fb/mezentsev.png"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/6d161/mezentsev.png"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/ad85c/mezentsev.webp"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/db955/mezentsev.png"
  },
  {
    "url": "static/21b92e4fd75fa88e648af69c3f9b8846/e7487/mezentsev.webp"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/0abe4/support_item.webp"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/2503d/support_item.jpg"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/2d49d/support_item.webp"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/5b743/support_item.webp"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/6d225/support_item.jpg"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/7fca4/support_item.webp"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/d89bd/support_item.webp"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/e00f3/support_item.jpg"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/e2de3/support_item.jpg"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/e553a/support_item.webp"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/f05ac/support_item.jpg"
  },
  {
    "url": "static/39828cd24d5c7c692df2d4dd79975443/f43cc/support_item.jpg"
  },
  {
    "url": "static/49509ef81b92f14af93b95f282ca3870/233d6/about-spirit-image.jpg"
  },
  {
    "url": "static/49509ef81b92f14af93b95f282ca3870/5e647/about-spirit-image.webp"
  },
  {
    "url": "static/49509ef81b92f14af93b95f282ca3870/838e0/about-spirit-image.webp"
  },
  {
    "url": "static/49509ef81b92f14af93b95f282ca3870/88242/about-spirit-image.webp"
  },
  {
    "url": "static/49509ef81b92f14af93b95f282ca3870/99f85/about-spirit-image.webp"
  },
  {
    "url": "static/49509ef81b92f14af93b95f282ca3870/9f658/about-spirit-image.jpg"
  },
  {
    "url": "static/49509ef81b92f14af93b95f282ca3870/a091c/about-spirit-image.jpg"
  },
  {
    "url": "static/49509ef81b92f14af93b95f282ca3870/ccc7a/about-spirit-image.jpg"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/0abe4/muay_thai_shorts_item_part_too.webp"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/2503d/muay_thai_shorts_item_part_too.jpg"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/2d49d/muay_thai_shorts_item_part_too.webp"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/5b743/muay_thai_shorts_item_part_too.webp"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/6d225/muay_thai_shorts_item_part_too.jpg"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/7fca4/muay_thai_shorts_item_part_too.webp"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/d89bd/muay_thai_shorts_item_part_too.webp"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/e00f3/muay_thai_shorts_item_part_too.jpg"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/e2de3/muay_thai_shorts_item_part_too.jpg"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/e553a/muay_thai_shorts_item_part_too.webp"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/f05ac/muay_thai_shorts_item_part_too.jpg"
  },
  {
    "url": "static/599a86d9fcf8b851ac82c2c2a0f7ee0d/f43cc/muay_thai_shorts_item_part_too.jpg"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/0abe4/boxing_gloves_item_white_part_too.webp"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/2503d/boxing_gloves_item_white_part_too.jpg"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/2d49d/boxing_gloves_item_white_part_too.webp"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/5b743/boxing_gloves_item_white_part_too.webp"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/6d225/boxing_gloves_item_white_part_too.jpg"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/7fca4/boxing_gloves_item_white_part_too.webp"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/d89bd/boxing_gloves_item_white_part_too.webp"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/e00f3/boxing_gloves_item_white_part_too.jpg"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/e2de3/boxing_gloves_item_white_part_too.jpg"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/e553a/boxing_gloves_item_white_part_too.webp"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/f05ac/boxing_gloves_item_white_part_too.jpg"
  },
  {
    "url": "static/5e07e2026f454c6bb184e89485d06ff5/f43cc/boxing_gloves_item_white_part_too.jpg"
  },
  {
    "url": "static/6add8171683f1bc81417c1932736ce3b/15a09/kilinich.jpg"
  },
  {
    "url": "static/6add8171683f1bc81417c1932736ce3b/233d6/kilinich.jpg"
  },
  {
    "url": "static/6add8171683f1bc81417c1932736ce3b/4abcf/kilinich.webp"
  },
  {
    "url": "static/6add8171683f1bc81417c1932736ce3b/5e647/kilinich.webp"
  },
  {
    "url": "static/6add8171683f1bc81417c1932736ce3b/838e0/kilinich.webp"
  },
  {
    "url": "static/6add8171683f1bc81417c1932736ce3b/99f85/kilinich.webp"
  },
  {
    "url": "static/6add8171683f1bc81417c1932736ce3b/9f658/kilinich.jpg"
  },
  {
    "url": "static/6add8171683f1bc81417c1932736ce3b/a091c/kilinich.jpg"
  },
  {
    "url": "static/7a0a93272bc896095c0a6687c82e71da/233d6/ruban.jpg"
  },
  {
    "url": "static/7a0a93272bc896095c0a6687c82e71da/24611/ruban.webp"
  },
  {
    "url": "static/7a0a93272bc896095c0a6687c82e71da/39fae/ruban.jpg"
  },
  {
    "url": "static/7a0a93272bc896095c0a6687c82e71da/5e647/ruban.webp"
  },
  {
    "url": "static/7a0a93272bc896095c0a6687c82e71da/838e0/ruban.webp"
  },
  {
    "url": "static/7a0a93272bc896095c0a6687c82e71da/99f85/ruban.webp"
  },
  {
    "url": "static/7a0a93272bc896095c0a6687c82e71da/9f658/ruban.jpg"
  },
  {
    "url": "static/7a0a93272bc896095c0a6687c82e71da/a091c/ruban.jpg"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/0abe4/boxing_gloves_mindy_item.webp"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/2503d/boxing_gloves_mindy_item.jpg"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/2d49d/boxing_gloves_mindy_item.webp"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/5b743/boxing_gloves_mindy_item.webp"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/6d225/boxing_gloves_mindy_item.jpg"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/7fca4/boxing_gloves_mindy_item.webp"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/d89bd/boxing_gloves_mindy_item.webp"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/e00f3/boxing_gloves_mindy_item.jpg"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/e2de3/boxing_gloves_mindy_item.jpg"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/e553a/boxing_gloves_mindy_item.webp"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/f05ac/boxing_gloves_mindy_item.jpg"
  },
  {
    "url": "static/7b7bca009af95f715d6bcbc2830a9f80/f43cc/boxing_gloves_mindy_item.jpg"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/0abe4/boxing_gloves_item.webp"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/2503d/boxing_gloves_item.jpg"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/2d49d/boxing_gloves_item.webp"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/5b743/boxing_gloves_item.webp"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/6d225/boxing_gloves_item.jpg"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/7fca4/boxing_gloves_item.webp"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/d89bd/boxing_gloves_item.webp"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/e00f3/boxing_gloves_item.jpg"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/e2de3/boxing_gloves_item.jpg"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/e553a/boxing_gloves_item.webp"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/f05ac/boxing_gloves_item.jpg"
  },
  {
    "url": "static/7deb9ed4aa11d30db94a357fc55ef81e/f43cc/boxing_gloves_item.jpg"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/20271/muaythai-icon.webp"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/21053/muaythai-icon.png"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/65892/muaythai-icon.png"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/67e4b/muaythai-icon.webp"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/7f38a/muaythai-icon.png"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/85f63/muaythai-icon.webp"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/a0c61/muaythai-icon.webp"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/c994e/muaythai-icon.webp"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/cb793/muaythai-icon.png"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/da61b/muaythai-icon.webp"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/e085e/muaythai-icon.png"
  },
  {
    "url": "static/7f0e7dd5ed0dafd80c12685f6ebef677/fcd75/muaythai-icon.png"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/01cc8/vlada.webp"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/0abe4/vlada.webp"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/0acc2/vlada.jpg"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/2503d/vlada.jpg"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/6d225/vlada.jpg"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/7fca4/vlada.webp"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/d89bd/vlada.webp"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/e00f3/vlada.jpg"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/e553a/vlada.webp"
  },
  {
    "url": "static/87acda9261635c19dcf8ea2ca0f00818/f05ac/vlada.jpg"
  },
  {
    "url": "static/8b00bfc8a3238067e94098b3f7037e00/0abe4/pro-muaythai.webp"
  },
  {
    "url": "static/8b00bfc8a3238067e94098b3f7037e00/2503d/pro-muaythai.jpg"
  },
  {
    "url": "static/8b00bfc8a3238067e94098b3f7037e00/6d225/pro-muaythai.jpg"
  },
  {
    "url": "static/8b00bfc8a3238067e94098b3f7037e00/7fca4/pro-muaythai.webp"
  },
  {
    "url": "static/8b00bfc8a3238067e94098b3f7037e00/ab2ae/pro-muaythai.jpg"
  },
  {
    "url": "static/8b00bfc8a3238067e94098b3f7037e00/e3bd5/pro-muaythai.webp"
  },
  {
    "url": "static/8b00bfc8a3238067e94098b3f7037e00/e553a/pro-muaythai.webp"
  },
  {
    "url": "static/8b00bfc8a3238067e94098b3f7037e00/f05ac/pro-muaythai.jpg"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/01cc8/anton-kalina.webp"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/0abe4/anton-kalina.webp"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/267ae/anton-kalina.png"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/7fca4/anton-kalina.webp"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/aaa67/anton-kalina.png"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/d2f91/anton-kalina.png"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/d89bd/anton-kalina.webp"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/e553a/anton-kalina.webp"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/ee679/anton-kalina.png"
  },
  {
    "url": "static/910b2a10e5259deeba68fe0ed6ebbbe7/fef32/anton-kalina.png"
  },
  {
    "url": "static/952cd5f216df46c3c1e392683c7e0eb9/1b6d6/header-image.webp"
  },
  {
    "url": "static/952cd5f216df46c3c1e392683c7e0eb9/3e0ce/header-image.png"
  },
  {
    "url": "static/952cd5f216df46c3c1e392683c7e0eb9/4f767/header-image.png"
  },
  {
    "url": "static/952cd5f216df46c3c1e392683c7e0eb9/552b2/header-image.png"
  },
  {
    "url": "static/952cd5f216df46c3c1e392683c7e0eb9/63d04/header-image.webp"
  },
  {
    "url": "static/952cd5f216df46c3c1e392683c7e0eb9/85c25/header-image.webp"
  },
  {
    "url": "static/952cd5f216df46c3c1e392683c7e0eb9/e65c5/header-image.png"
  },
  {
    "url": "static/952cd5f216df46c3c1e392683c7e0eb9/ed53e/header-image.webp"
  },
  {
    "url": "static/ad3432cc8772f1b1ce283c66540f21c0/0abe4/kraminskiy.webp"
  },
  {
    "url": "static/ad3432cc8772f1b1ce283c66540f21c0/0fa87/kraminskiy.jpg"
  },
  {
    "url": "static/ad3432cc8772f1b1ce283c66540f21c0/2503d/kraminskiy.jpg"
  },
  {
    "url": "static/ad3432cc8772f1b1ce283c66540f21c0/6754d/kraminskiy.webp"
  },
  {
    "url": "static/ad3432cc8772f1b1ce283c66540f21c0/6d225/kraminskiy.jpg"
  },
  {
    "url": "static/ad3432cc8772f1b1ce283c66540f21c0/7fca4/kraminskiy.webp"
  },
  {
    "url": "static/ad3432cc8772f1b1ce283c66540f21c0/e553a/kraminskiy.webp"
  },
  {
    "url": "static/ad3432cc8772f1b1ce283c66540f21c0/f05ac/kraminskiy.jpg"
  },
  {
    "url": "static/d/1052558473.json"
  },
  {
    "url": "static/d/1276448997.json"
  },
  {
    "url": "static/d/1277910425.json"
  },
  {
    "url": "static/d/1519380464.json"
  },
  {
    "url": "static/d/1781546995.json"
  },
  {
    "url": "static/d/1908086168.json"
  },
  {
    "url": "static/d/2112290839.json"
  },
  {
    "url": "static/d/2213112686.json"
  },
  {
    "url": "static/d/2251068261.json"
  },
  {
    "url": "static/d/2334504576.json"
  },
  {
    "url": "static/d/2705024138.json"
  },
  {
    "url": "static/d/3575867299.json"
  },
  {
    "url": "static/d/362047999.json"
  },
  {
    "url": "static/d/3877378251.json"
  },
  {
    "url": "static/d/440277888.json"
  },
  {
    "url": "static/d/511827318.json"
  },
  {
    "url": "static/d/866538708.json"
  },
  {
    "url": "static/d/900051467.json"
  },
  {
    "url": "static/d/961880682.json"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/01cc8/mot.webp"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/0cd1c/mot.webp"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/1f0a0/mot.png"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/3b42f/mot.png"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/5a5af/mot.png"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/5e647/mot.webp"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/838e0/mot.webp"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/99f85/mot.webp"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/9eefb/mot.png"
  },
  {
    "url": "static/d7f757b9b8b83c9968b986f5ddd38e39/fef32/mot.png"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/0abe4/muay_thai_shorts_item.webp"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/2503d/muay_thai_shorts_item.jpg"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/2d49d/muay_thai_shorts_item.webp"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/5b743/muay_thai_shorts_item.webp"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/6d225/muay_thai_shorts_item.jpg"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/7fca4/muay_thai_shorts_item.webp"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/d89bd/muay_thai_shorts_item.webp"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/e00f3/muay_thai_shorts_item.jpg"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/e2de3/muay_thai_shorts_item.jpg"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/e553a/muay_thai_shorts_item.webp"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/f05ac/muay_thai_shorts_item.jpg"
  },
  {
    "url": "static/e7af73bd76beb94eac382fa59e9447ef/f43cc/muay_thai_shorts_item.jpg"
  },
  {
    "url": "styles-d3259afcef90844d6efd.js"
  },
  {
    "url": "styles-d3259afcef90844d6efd.js.map",
    "revision": "d8d42c0e24a917a6dfb538f16c4e412a"
  },
  {
    "url": "styles.3d376241de7045da0e43.css"
  },
  {
    "url": "webpack-runtime-2398e8228663e05c6680.js"
  },
  {
    "url": "webpack-runtime-2398e8228663e05c6680.js.map",
    "revision": "09d3def1d5f2067067a31abca0476354"
  },
  {
    "url": "webpack.stats.json",
    "revision": "38652e23fcc692913a8b64b14df95fcc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-b321a805b04aac2ef52c.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
