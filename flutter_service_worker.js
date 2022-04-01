'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a6885bf21214b37c3f0f89d1f28a63e7",
"assets/FontManifest.json": "14daee83a296805922b95e4a1245e4b4",
"assets/fonts/DMSans-Bold.ttf": "071853031a2175ada019db9e6fd1585c",
"assets/fonts/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/2.0x/ace_landscape.png": "7757ae0bf96a753fa987b80d53138cc7",
"assets/images/2.0x/background.png": "ad5002027a7ac446249246fd18f9ba71",
"assets/images/2.0x/business_technology.png": "df9745a0aa94cba028c6bcf65120f62f",
"assets/images/2.0x/early_childhood.png": "3658b561e9f7cdac5fb16f885a30aee7",
"assets/images/2.0x/english.png": "86fa7aee38ac6f62a569b84fcc4d9d60",
"assets/images/2.0x/hospitality.png": "88f540854eaee754594ab9013c9f9c50",
"assets/images/2.0x/tech_sciences.png": "9def447e6e4b291febd716b9a6eb87e2",
"assets/images/3.0x/ace_landscape.png": "6d8e9195d068cd89ebc62bf920ddd92d",
"assets/images/3.0x/background.png": "552cf4a76057f0d0119f8477aadccb41",
"assets/images/3.0x/business_technology.png": "4fb8136fdbd24ee0e48a6fa1c2712f6b",
"assets/images/3.0x/early_childhood.png": "55d77e6ac047e54cb0f63faec2840c0c",
"assets/images/3.0x/english.png": "468381ad062b6d98fd4c6aa768180d79",
"assets/images/3.0x/hospitality.png": "2abbc2e4dd4f7b03ec9ad3ab3398b6f6",
"assets/images/3.0x/tech_sciences.png": "d506bc98f75be64b30c7a2c28e209e9f",
"assets/images/ace_landscape.png": "adb6c2ec19e4a171da69bba03bc3cbba",
"assets/images/aibt.png": "a590e755424511eeaa277290e31dcb5b",
"assets/images/aibt.svg": "a4f6336acde50e4e9b47b79f3ab3baf7",
"assets/images/aibt_landscape.png": "d7413162711739efcde2297916ea63c3",
"assets/images/background.png": "b9d7b584088643ef62a974f508aac018",
"assets/images/bespoke.svg": "86f0dc8eac56dd0ec994fa7991d0549b",
"assets/images/branson.svg": "e58c2a74162874eff4431f227e611e88",
"assets/images/business_technology.png": "781b5e85c7fce914cd81e38fbd077dae",
"assets/images/diana.svg": "91fd0b63d306e52bf8f6a6dbbb999097",
"assets/images/early_childhood.png": "dd28179fdedfab772ee3794766dc7d5d",
"assets/images/edison.svg": "b8dc64b0f73353cdc9db3209614eab70",
"assets/images/english.png": "6b380e406bbb0aa936896ccd1fcc143e",
"assets/images/hospitality.png": "dd732133fe760393e10c86b41ac6151f",
"assets/images/logo.png": "8585ad6b41e3d882af13a4c859e8c14c",
"assets/images/logo_backgroud_white.png": "c8eecb98501c0296e7f57b31962b4443",
"assets/images/reach.png": "b82d1d1137564174a079010334db95b5",
"assets/images/reach.svg": "d88d1869d4a6118e4c4269fb046f2484",
"assets/images/reach_landscape.png": "b0d758f3290c5c50a654231e3d70b6c3",
"assets/images/sheldon.svg": "164844bd094502009fc8e0f80692a504",
"assets/images/tech_sciences.png": "747449310b245d4aa91e17d82d20ae13",
"assets/images/VC%2520Logo%2520Portrait-01.svg": "209775e1d355ac58716439e15b685ec6",
"assets/images/vc_logo_landscape.png": "d92115ab231bfedf7f788be47bcfff4e",
"assets/images/vc_logo_landscape.svg": "6820d91f7a3b11c497c39895a5ef5066",
"assets/NOTICES": "60e57ee7dd24980597b63863918437a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"icons/Icon-192.png": "b8c14e5831870749365b6ced192a7070",
"icons/Icon-512.png": "8585ad6b41e3d882af13a4c859e8c14c",
"index.html": "abb4af897740b8e13a437e9baf20e539",
"/": "abb4af897740b8e13a437e9baf20e539",
"logo.png": "6e96f59fe0611f70e9d51eba20d317f0",
"main.dart.js": "3397bb8e98f410a8b9ab5725141b9406",
"manifest.json": "99da374e58b3747ed8611ab092577019",
"version.json": "cf770f007ad447a7bbce1247d6a57d49"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
