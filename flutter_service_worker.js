'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c151561d40472bbb51e7c694ea6528f9",
"assets/FontManifest.json": "14daee83a296805922b95e4a1245e4b4",
"assets/fonts/DMSans-Bold.ttf": "071853031a2175ada019db9e6fd1585c",
"assets/fonts/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/2.0x/background.png": "ad5002027a7ac446249246fd18f9ba71",
"assets/images/3.0x/background.png": "552cf4a76057f0d0119f8477aadccb41",
"assets/images/aibt-i.png": "49ed458178b09c66b8e9afceeda81c1a",
"assets/images/aibt-i_landscape.png": "a130229eacfdbf93f771016cbeba16cd",
"assets/images/aibt.png": "a590e755424511eeaa277290e31dcb5b",
"assets/images/aibt.svg": "a4f6336acde50e4e9b47b79f3ab3baf7",
"assets/images/aibt_landscape.png": "d7413162711739efcde2297916ea63c3",
"assets/images/avta.png": "c68da0b9715aa5e40bd0f9de0410c62f",
"assets/images/avta.svg": "595a32a5b04cee2382984b8bed501c31",
"assets/images/avta_landscape.png": "672c52cbf87b259f4dddb5c82479bdf5",
"assets/images/background.png": "b9d7b584088643ef62a974f508aac018",
"assets/images/logo.png": "8585ad6b41e3d882af13a4c859e8c14c",
"assets/images/logo_backgroud_white.png": "c8eecb98501c0296e7f57b31962b4443",
"assets/images/npa.png": "ca612bc5d7fd96337f0d67a2d1b18e88",
"assets/images/npa.svg": "67a026cb382bf2de7963dfe72b2f4523",
"assets/images/npa_landscape.png": "0a78d276d003a3783117a4f681b85394",
"assets/images/reach.png": "b82d1d1137564174a079010334db95b5",
"assets/images/reach.svg": "d88d1869d4a6118e4c4269fb046f2484",
"assets/images/reach_landscape.png": "b0d758f3290c5c50a654231e3d70b6c3",
"assets/images/vc_logo_landscape.png": "d92115ab231bfedf7f788be47bcfff4e",
"assets/images/vc_logo_landscape.svg": "6820d91f7a3b11c497c39895a5ef5066",
"assets/NOTICES": "a72b08b18b5c84456bcdcf7ba02de998",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "29d09a374bfd26c53ff42d016773960a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "b8c14e5831870749365b6ced192a7070",
"icons/Icon-512.png": "8585ad6b41e3d882af13a4c859e8c14c",
"index.html": "b7ac9977e1bbfd9de4f904568e0d17d3",
"/": "b7ac9977e1bbfd9de4f904568e0d17d3",
"logo.png": "6e96f59fe0611f70e9d51eba20d317f0",
"main.dart.js": "10a0b0578bfc525c9a553b13edd07b66",
"manifest.json": "8dbfa948e1c39c73bc66762a2ee70e76",
"version.json": "cf770f007ad447a7bbce1247d6a57d49"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
