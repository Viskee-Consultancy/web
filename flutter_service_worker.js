'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0c5995677516a384aa5f2bab01687589",
"assets/FontManifest.json": "14daee83a296805922b95e4a1245e4b4",
"assets/fonts/DMSans-Bold.ttf": "071853031a2175ada019db9e6fd1585c",
"assets/fonts/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1.0x/ace_landscape.png": "6d8e9195d068cd89ebc62bf920ddd92d",
"assets/images/1.0x/aibt.png": "d7661174255852d5ae9187af73f21622",
"assets/images/1.0x/aibt_landscape.png": "f459b259b722cceca5168f861757cdb8",
"assets/images/1.0x/aibt_portrait.png": "61186ade7bcc2ea26c6abc0e80d8ef26",
"assets/images/1.0x/background.jpg": "8128602fdecea9ac779b36ef72513943",
"assets/images/1.0x/background_landscape.jpg": "c722d1142b2d02550ca70e6e9b66c606",
"assets/images/1.0x/background_portrait.jpg": "c6989806def2a857c3310eb78c76e303",
"assets/images/1.0x/bespoke.png": "a97d9ee8309b4970a0e1f44f5d07d859",
"assets/images/1.0x/bespoke_landscape.png": "f59e7be872ea464678a8cb5ae8f9e6a4",
"assets/images/1.0x/bespoke_portrait.png": "067143780db3864fa42e10601d130283",
"assets/images/1.0x/branson.png": "ac05f6b26725202a9b82b3785eb63b4a",
"assets/images/1.0x/branson_landscape.png": "dd47397691efbd092445ec64312dbe00",
"assets/images/1.0x/branson_portrait.png": "2dbe2b6b25f180eac890d9e25e450a66",
"assets/images/1.0x/clock.png": "457b04da86c3c1c1e5b33de6360cd387",
"assets/images/1.0x/diana.png": "93d609d2b38eee076346f409a247632b",
"assets/images/1.0x/diana_landscape.png": "ff4c119a3da7c2aab50b1e8bff6d6f43",
"assets/images/1.0x/diana_portrait.png": "7b4fd70caa43a55e15bc435e68eca0e0",
"assets/images/1.0x/edison.png": "3ea2aa5f7436adb8c93a6a52377430cd",
"assets/images/1.0x/edison_landscape.png": "f8c9c784829842e6a0d0cbd6d00609d1",
"assets/images/1.0x/edison_portrait.png": "369f3eb0fa248f36c6c662d5ab0fb0a3",
"assets/images/1.0x/location.png": "2570b23228a7d6b55b80418985ba56b1",
"assets/images/1.0x/pdf.png": "213177394677c2446f686f9e791d7b2d",
"assets/images/1.0x/pricing.png": "3465e4c62ca83bb788592dd9d5249944",
"assets/images/1.0x/reach.png": "2ce90b21bb754bb2fb14ebffb69de3e1",
"assets/images/1.0x/reach_landscape.png": "99f41f47035773399a6d8e7f6c12135f",
"assets/images/1.0x/reach_portrait.png": "a2cbd20f0698193314c887ecbe6cc09f",
"assets/images/1.0x/sheldon.png": "d32c2543c61acaa27340f2e60436805d",
"assets/images/1.0x/sheldon_landscape.png": "a73ea19ceb0462d1c97810be7aac6aa4",
"assets/images/1.0x/sheldon_portrait.png": "c212a18999c0f639937498d9d823958c",
"assets/images/1.0x/vc_logo_landscape.png": "dcf89e298065d877d95788e34c84c841",
"assets/images/1.0x/vc_logo_landscape_white.png": "f93f437be9d82fa8bb37b8ba7e9f6f50",
"assets/images/1.5x/ace_landscape.png": "6d8e9195d068cd89ebc62bf920ddd92d",
"assets/images/1.5x/aibt.png": "d7661174255852d5ae9187af73f21622",
"assets/images/1.5x/aibt_landscape.png": "f459b259b722cceca5168f861757cdb8",
"assets/images/1.5x/aibt_portrait.png": "cb9eba62e6f87d4d09b042f5ef2e3ba8",
"assets/images/1.5x/background.jpg": "b98a791328395d6087a1c3e0e47b7095",
"assets/images/1.5x/background_landscape.jpg": "89e70ba0c9569b8cfe12b9cc0be3648c",
"assets/images/1.5x/background_portrait.jpg": "147fa17b9024819c848e1bc1ac65ea10",
"assets/images/1.5x/bespoke.png": "a97d9ee8309b4970a0e1f44f5d07d859",
"assets/images/1.5x/bespoke_landscape.png": "c2a29596c935e47889b4177dacbb33b0",
"assets/images/1.5x/bespoke_portrait.png": "788df1a058408eae589daf4356cae117",
"assets/images/1.5x/branson.png": "ac05f6b26725202a9b82b3785eb63b4a",
"assets/images/1.5x/branson_landscape.png": "dffb04f1b599a736eeb6e77829862668",
"assets/images/1.5x/branson_portrait.png": "ca11f295d40a5f7f2014283d80229995",
"assets/images/1.5x/diana.png": "93d609d2b38eee076346f409a247632b",
"assets/images/1.5x/diana_landscape.png": "e4b655f4679de095f9dfa02990457a38",
"assets/images/1.5x/diana_portrait.png": "b4876a3c6881fe6da15e1f37db97ebbb",
"assets/images/1.5x/edison.png": "3ea2aa5f7436adb8c93a6a52377430cd",
"assets/images/1.5x/edison_landscape.png": "f131c8b6c4b4a0d2e8c819968cdd3476",
"assets/images/1.5x/edison_portrait.png": "df91c874429249bcecaaa24c044ef436",
"assets/images/1.5x/reach.png": "2ce90b21bb754bb2fb14ebffb69de3e1",
"assets/images/1.5x/reach_landscape.png": "99f41f47035773399a6d8e7f6c12135f",
"assets/images/1.5x/reach_portrait.png": "a2cbd20f0698193314c887ecbe6cc09f",
"assets/images/1.5x/sheldon.png": "d32c2543c61acaa27340f2e60436805d",
"assets/images/1.5x/sheldon_landscape.png": "90770614cf36b68358c749ef61f3a9f3",
"assets/images/1.5x/sheldon_portrait.png": "70c536b2698e86beae96dcef8e05d740",
"assets/images/1.5x/vc_logo_landscape.png": "dcf89e298065d877d95788e34c84c841",
"assets/images/1.5x/vc_logo_landscape_white.png": "f93f437be9d82fa8bb37b8ba7e9f6f50",
"assets/images/2.0x/ace_landscape.png": "6d8e9195d068cd89ebc62bf920ddd92d",
"assets/images/2.0x/aibt.png": "d7661174255852d5ae9187af73f21622",
"assets/images/2.0x/aibt_landscape.png": "f459b259b722cceca5168f861757cdb8",
"assets/images/2.0x/aibt_portrait.png": "cb9eba62e6f87d4d09b042f5ef2e3ba8",
"assets/images/2.0x/background.jpg": "b98a791328395d6087a1c3e0e47b7095",
"assets/images/2.0x/background_landscape.jpg": "89e70ba0c9569b8cfe12b9cc0be3648c",
"assets/images/2.0x/background_portrait.jpg": "147fa17b9024819c848e1bc1ac65ea10",
"assets/images/2.0x/bespoke.png": "a97d9ee8309b4970a0e1f44f5d07d859",
"assets/images/2.0x/bespoke_landscape.png": "c2a29596c935e47889b4177dacbb33b0",
"assets/images/2.0x/bespoke_portrait.png": "788df1a058408eae589daf4356cae117",
"assets/images/2.0x/branson.png": "ac05f6b26725202a9b82b3785eb63b4a",
"assets/images/2.0x/branson_landscape.png": "dffb04f1b599a736eeb6e77829862668",
"assets/images/2.0x/branson_portrait.png": "ca11f295d40a5f7f2014283d80229995",
"assets/images/2.0x/diana.png": "93d609d2b38eee076346f409a247632b",
"assets/images/2.0x/diana_landscape.png": "e4b655f4679de095f9dfa02990457a38",
"assets/images/2.0x/diana_portrait.png": "b4876a3c6881fe6da15e1f37db97ebbb",
"assets/images/2.0x/edison.png": "3ea2aa5f7436adb8c93a6a52377430cd",
"assets/images/2.0x/edison_landscape.png": "f131c8b6c4b4a0d2e8c819968cdd3476",
"assets/images/2.0x/edison_portrait.png": "df91c874429249bcecaaa24c044ef436",
"assets/images/2.0x/reach.png": "2ce90b21bb754bb2fb14ebffb69de3e1",
"assets/images/2.0x/reach_landscape.png": "99f41f47035773399a6d8e7f6c12135f",
"assets/images/2.0x/reach_portrait.png": "a2cbd20f0698193314c887ecbe6cc09f",
"assets/images/2.0x/sheldon.png": "d32c2543c61acaa27340f2e60436805d",
"assets/images/2.0x/sheldon_landscape.png": "90770614cf36b68358c749ef61f3a9f3",
"assets/images/2.0x/sheldon_portrait.png": "70c536b2698e86beae96dcef8e05d740",
"assets/images/2.0x/vc_logo_landscape.png": "dcf89e298065d877d95788e34c84c841",
"assets/images/2.0x/vc_logo_landscape_white.png": "f93f437be9d82fa8bb37b8ba7e9f6f50",
"assets/images/3.0x/ace_landscape.png": "6d8e9195d068cd89ebc62bf920ddd92d",
"assets/images/3.0x/aibt.png": "d7661174255852d5ae9187af73f21622",
"assets/images/3.0x/aibt_landscape.png": "f459b259b722cceca5168f861757cdb8",
"assets/images/3.0x/aibt_portrait.png": "cb9eba62e6f87d4d09b042f5ef2e3ba8",
"assets/images/3.0x/background.jpg": "b98a791328395d6087a1c3e0e47b7095",
"assets/images/3.0x/background_landscape.jpg": "89e70ba0c9569b8cfe12b9cc0be3648c",
"assets/images/3.0x/background_portrait.jpg": "147fa17b9024819c848e1bc1ac65ea10",
"assets/images/3.0x/bespoke.png": "a97d9ee8309b4970a0e1f44f5d07d859",
"assets/images/3.0x/bespoke_landscape.png": "c2a29596c935e47889b4177dacbb33b0",
"assets/images/3.0x/bespoke_portrait.png": "788df1a058408eae589daf4356cae117",
"assets/images/3.0x/branson.png": "ac05f6b26725202a9b82b3785eb63b4a",
"assets/images/3.0x/branson_landscape.png": "dffb04f1b599a736eeb6e77829862668",
"assets/images/3.0x/branson_portrait.png": "ca11f295d40a5f7f2014283d80229995",
"assets/images/3.0x/diana.png": "93d609d2b38eee076346f409a247632b",
"assets/images/3.0x/diana_landscape.png": "e4b655f4679de095f9dfa02990457a38",
"assets/images/3.0x/diana_portrait.png": "b4876a3c6881fe6da15e1f37db97ebbb",
"assets/images/3.0x/edison.png": "3ea2aa5f7436adb8c93a6a52377430cd",
"assets/images/3.0x/edison_landscape.png": "f131c8b6c4b4a0d2e8c819968cdd3476",
"assets/images/3.0x/edison_portrait.png": "df91c874429249bcecaaa24c044ef436",
"assets/images/3.0x/reach.png": "2ce90b21bb754bb2fb14ebffb69de3e1",
"assets/images/3.0x/reach_landscape.png": "99f41f47035773399a6d8e7f6c12135f",
"assets/images/3.0x/reach_portrait.png": "a2cbd20f0698193314c887ecbe6cc09f",
"assets/images/3.0x/sheldon.png": "d32c2543c61acaa27340f2e60436805d",
"assets/images/3.0x/sheldon_landscape.png": "90770614cf36b68358c749ef61f3a9f3",
"assets/images/3.0x/sheldon_portrait.png": "70c536b2698e86beae96dcef8e05d740",
"assets/images/3.0x/vc_logo_landscape.png": "dcf89e298065d877d95788e34c84c841",
"assets/images/3.0x/vc_logo_landscape_white.png": "f93f437be9d82fa8bb37b8ba7e9f6f50",
"assets/images/4.0x/ace_landscape.png": "6d8e9195d068cd89ebc62bf920ddd92d",
"assets/images/4.0x/aibt.png": "d7661174255852d5ae9187af73f21622",
"assets/images/4.0x/aibt_landscape.png": "f459b259b722cceca5168f861757cdb8",
"assets/images/4.0x/aibt_portrait.png": "cb9eba62e6f87d4d09b042f5ef2e3ba8",
"assets/images/4.0x/background.jpg": "b98a791328395d6087a1c3e0e47b7095",
"assets/images/4.0x/background_landscape.jpg": "e75f99444947c0d52ac4233360686b69",
"assets/images/4.0x/background_portrait.jpg": "9f0df99b1f177314702321790442c469",
"assets/images/4.0x/bespoke.png": "a97d9ee8309b4970a0e1f44f5d07d859",
"assets/images/4.0x/bespoke_landscape.png": "f89f8ec76663ca39cf2fa47a7626cff7",
"assets/images/4.0x/bespoke_portrait.png": "788df1a058408eae589daf4356cae117",
"assets/images/4.0x/branson.png": "ac05f6b26725202a9b82b3785eb63b4a",
"assets/images/4.0x/branson_landscape.png": "dffb04f1b599a736eeb6e77829862668",
"assets/images/4.0x/branson_portrait.png": "ca11f295d40a5f7f2014283d80229995",
"assets/images/4.0x/diana.png": "93d609d2b38eee076346f409a247632b",
"assets/images/4.0x/diana_landscape.png": "e4b655f4679de095f9dfa02990457a38",
"assets/images/4.0x/diana_portrait.png": "b4876a3c6881fe6da15e1f37db97ebbb",
"assets/images/4.0x/edison.png": "3ea2aa5f7436adb8c93a6a52377430cd",
"assets/images/4.0x/edison_landscape.png": "2432ff69813caddf5376701f1ff73d4e",
"assets/images/4.0x/edison_portrait.png": "df91c874429249bcecaaa24c044ef436",
"assets/images/4.0x/reach.png": "2ce90b21bb754bb2fb14ebffb69de3e1",
"assets/images/4.0x/reach_landscape.png": "99f41f47035773399a6d8e7f6c12135f",
"assets/images/4.0x/reach_portrait.png": "a2cbd20f0698193314c887ecbe6cc09f",
"assets/images/4.0x/sheldon.png": "d32c2543c61acaa27340f2e60436805d",
"assets/images/4.0x/sheldon_landscape.png": "90770614cf36b68358c749ef61f3a9f3",
"assets/images/4.0x/sheldon_portrait.png": "70c536b2698e86beae96dcef8e05d740",
"assets/images/4.0x/vc_logo_landscape.png": "dcf89e298065d877d95788e34c84c841",
"assets/images/4.0x/vc_logo_landscape_white.png": "f93f437be9d82fa8bb37b8ba7e9f6f50",
"assets/NOTICES": "73ecb741d93a98a4f9e28c07ffaa33b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/Icon-192.png": "e9496214e3d35ee15dc86f0644235843",
"icons/Icon-512.png": "c63a380942b450a7975729a6b563fa82",
"index.html": "a25cc386c74ec2bec6afd32462d392d9",
"/": "a25cc386c74ec2bec6afd32462d392d9",
"logo.png": "ad60f4411f08086ba341eb4a2678f228",
"main.dart.js": "09fb196e3e57ca11c109c1073115f29e",
"manifest.json": "99da374e58b3747ed8611ab092577019",
"version.json": "90e79bd4f4ec2a07ff5deee786dcfe63"
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
