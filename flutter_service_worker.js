'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84769508d8e5e9301de014a2cc9072b9",
"assets/AssetManifest.bin.json": "cf87dcb06e7401e844f1379d2967d491",
"assets/AssetManifest.json": "ec5944854395db287c344706c7dc94d4",
"assets/assets/images/Accueil_large.jpg": "8e61f91c8c9616505c168371c1d16ad6",
"assets/assets/images/husky_female_selected.svg": "64af98885b88454f1c9c2cea0d95485b",
"assets/assets/images/husky_female_unselected.svg": "4ab33fb9d55997e4049671377d9640f8",
"assets/assets/images/husky_male_selected.svg": "ac74f2bb57e1eb033e995a98ff59ff6f",
"assets/assets/images/husky_male_unselected.svg": "8e27353395b9b582ec9afc9cf680540d",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-0.jpg": "a4c3be23b1a4d25cedd0a744bad41c4c",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-1.jpg": "d3bff5918303476305a75d45d26a484f",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-10.jpg": "88a4ee440bbd2012a0fe5749c40f5374",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-11.jpg": "c0e29035f352edbc6ff98907c4734aaf",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-12.jpg": "43f2f2311f1a082d4e1713df547405b5",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-13.jpg": "5e1be37bb69ec54b400fb7d31e6aaa51",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-14.jpg": "a058d86d910368d5cf9722e33c252333",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-15.jpg": "1b0045e57a5fc174a62da0112c35af7b",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-16.jpg": "8852b9fd3b614a8d75664baafbf06514",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-17.jpg": "69a7d7398989bc534622fa1d2f125480",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-18.jpg": "fff1f194739e49d6e4291aa3948d8060",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-19.jpg": "eadb9d7d0e24a0706649b45098fd3059",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-2.jpg": "9b579a46a84facb48ce43e2efe619c9e",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-20.jpg": "1a86bc3e6e95b88e745b1353aaac7685",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-21.jpg": "5cbafafda4db8cb532af6e97588b178c",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-22.jpg": "55ea4d81209395d7c84fe3365bfc8faf",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-23.jpg": "89841bce448b91daed38efb3413ff140",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-24.jpg": "d29737197a13fb394179051b94611be0",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-25.jpg": "5b23333a0a44423e0fe757fbaa0d2e57",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-26.jpg": "b96e7c9c66ae5cd9db10a0d3c8b76ce2",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-27.jpg": "64763e76fd7b54942adef48006b057ea",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-28.jpg": "742eafbbbc009cd5283efbd3f7a92643",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-29.jpg": "f5e4298b71493b3e4c4e3b06f494d115",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-3.jpg": "9e6c20f470557a99a4a8c412d0e2b5b0",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-30.jpg": "d02b088b15a2537a0a7333539d867b4d",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-31.jpg": "d0b5ab89717758658f770e7f45e60a92",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-32.jpg": "ffa0da0955b7f569fd06ed6ce1b4941b",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-4.jpg": "e092d671afe26020a35f4e1dd6690909",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-5.jpg": "a4c3be23b1a4d25cedd0a744bad41c4c",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-6.jpg": "aac2c6deb51f5e1f5dd098e51d49d5aa",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-7.jpg": "85c0874cf7fd5e9f45bcfa66e37c94dc",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-8.jpg": "0e56b587cb1f1ae8aaea8f8a8c756f74",
"assets/assets/images/presentation/signal-2024-10-29-16-10-54-016-9.jpg": "98789ad3e084bf34336f12c8fe2a401f",
"assets/assets/images/presentation/thorkell-baniere.jpg": "9ade09790cfc9b1bd0f705369794aaa4",
"assets/assets/images/presentation/tielsen-baniere.jpg": "2543b0ac315a4b3e88d638eae5af9c25",
"assets/assets/images/sample1.jpg": "1dadd2972c49ba71b3da0a9ac6f56f07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0734e3d9f23bd7936c5458c4d961f3e8",
"assets/NOTICES": "79e67fec43333b08f93328372e2f7a62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "58a575e0b39a5d10b949611da406c195",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b84fd2070945c1f3589f6856274e8e0c",
"/": "b84fd2070945c1f3589f6856274e8e0c",
"main.dart.js": "0945d907eefef3bfc4fb42866a293ba0",
"manifest.json": "09245fa59f64f0e5402267cf8dcaf48f",
"version.json": "d126b2027a72707cfa3fa7fa624806a5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
