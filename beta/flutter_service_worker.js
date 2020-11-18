'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "1b81274c62133e553b9c20c45f20ad50",
"/": "1b81274c62133e553b9c20c45f20ad50",
"main.dart.js.deps": "7777d2fc098446f82d62495277a3f1e2",
"main.dart.js": "76321999121e22cacb1a15c06642c5ea",
"assets/LICENSE": "fc94f83119f7ad8f210eb34bc533c43c",
"assets/AssetManifest.json": "20115683d823a25d833d028d010af51a",
"assets/NOTICES": "bddf931222baf0be0065f118560469db",
"assets/FontManifest.json": "2d9a2c1ee8cc1b6f322623289f48b5fc",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/NotoColorEmoji.ttf": "e0e141083ec8960372e6fa96940d0721",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/checkbox-unchecked.png": "609cf233f8570c892ca9c7c72c5155d0",
"assets/assets/play-icon-selected.png": "c8a71b75e086996324769a4bdaf6b815",
"assets/assets/build.properties": "e3df43d73ed6efa1f4c7f1b862e38570",
"assets/assets/ngti-logo.png": "6e0fe5830363769e655a0cc703ec4413",
"assets/assets/play-icon.png": "44cbbe5ea913041b0cf83fd5e435191d",
"assets/assets/favicon.ico": "f6b77ee22ac1ea16feb2da56f0d122f2",
"assets/assets/Estimoji_loading.gif": "8faf1f7de534da0c2ed5f95aa1e45398",
"assets/assets/splash-web.gif": "4b99adaafab723bdef9bd8cdc8d712d2",
"assets/assets/2.0x/checkbox-unchecked.png": "0d278758cd718ec0312261c327c6cb21",
"assets/assets/2.0x/play-icon-selected.png": "106c5e52d4cc46c333041a72da164ac1",
"assets/assets/2.0x/ngti-logo.png": "259ab242051e7e5aa6b637bc533766e8",
"assets/assets/2.0x/play-icon.png": "5be05c80ce4a784c54153ee7b863023b",
"assets/assets/2.0x/checkbox-checked.png": "6de99d74659bdd1c3c68dbecafe8b66c",
"assets/assets/2.0x/card-voted.png": "a0ad42ee71eafe873a3a332ed1a28149",
"assets/assets/2.0x/estimoji-logo.png": "4682da0bdd7588caaee2482f451d5cff",
"assets/assets/2.0x/card-not-voted.png": "a4cfaeeb8070aa2acf201199c7660050",
"assets/assets/2.0x/show-qr-icon.png": "42ca64a0c64dd69cc6442bbbdeb7ac66",
"assets/assets/2.0x/join-icon.png": "346c84b992cb4ceb225a6c19d892c5a6",
"assets/assets/2.0x/join-icon-selected.png": "b0e092ef00c995cceedf202b1fdf905f",
"assets/assets/2.0x/scan-qr.png": "6ab9668c5f56996c8ac4b08139afa1e1",
"assets/assets/CREDIT.md": "a7effef73a7627e03b9f26c3c48c4db4",
"assets/assets/checkbox-checked.png": "f857a438159c837cea6918196ccf8764",
"assets/assets/card-voted.png": "c47e73b3b618e869840884e93b95a524",
"assets/assets/estimoji-logo.png": "968f33ea49e4245b79ef9091f2495e26",
"assets/assets/matublink.gif": "e23e25474ca24f5c5a21fffebb7499b4",
"assets/assets/card-not-voted.png": "921c2401a1742d594d4f6ebf257d88c7",
"assets/assets/favicon/favicon-16x16.png": "3af161b7771e848a267be6041b56d8ce",
"assets/assets/favicon/safari-pinned-tab.svg": "091d560e91f7fed3bacf59780182a10e",
"assets/assets/favicon/favicon.ico": "420cd6df824de25c9c9694e59c485819",
"assets/assets/favicon/android-chrome-192x192.png": "d597597b615b20a5e68c03252c641878",
"assets/assets/favicon/apple-touch-icon.png": "a000fb53afcb20bea7c3b31ad7e9a619",
"assets/assets/favicon/android-chrome-512x512.png": "732878b0660378d408621d12981a5947",
"assets/assets/favicon/site.webmanifest": "d478f9adb410ce8fa6edb47b88a031ca",
"assets/assets/favicon/favicon-32x32.png": "fdb94d2540488c69b60566a2f2cba751",
"assets/assets/show-qr-icon.png": "3e980925f359294ae14df501e15c2416",
"assets/assets/3.0x/checkbox-unchecked.png": "e7ef32c9fea904e704ca06fe955ae349",
"assets/assets/3.0x/play-icon-selected.png": "4bd692569a130f2ede6ccda38d10858c",
"assets/assets/3.0x/ngti-logo.png": "6375d6bd10b54b639df313723d0f9d91",
"assets/assets/3.0x/play-icon.png": "c67251bf92a50b563037879c0c8883b9",
"assets/assets/3.0x/checkbox-checked.png": "56ac8e015b71e1c52da0ab357b0e004e",
"assets/assets/3.0x/card-voted.png": "dad66f35dc439fb5385319acdb763016",
"assets/assets/3.0x/estimoji-logo.png": "f2efbb22bc228bbf66cb1704c70d54c3",
"assets/assets/3.0x/card-not-voted.png": "360be79175b03faa75a5148b3bf9463a",
"assets/assets/3.0x/show-qr-icon.png": "b6c1dcb01b60d6a34a810dc5ebb22b68",
"assets/assets/3.0x/join-icon.png": "a08bb95025c6799e842bd0aaa8bedaf9",
"assets/assets/3.0x/join-icon-selected.png": "08d3399269d69baed7bc16ace4ed4212",
"assets/assets/3.0x/scan-qr.png": "aba7715b49e122c66cbfdd6f406d1bed",
"assets/assets/google-play-badge.png": "304d2a2419da6880f6acd8b3a0c830d3",
"assets/assets/Card-empty.png": "db87631d110aa169efcd13ad125fab17",
"assets/assets/TERMS.md": "0bca4486d31c4862070707774a7e48e8",
"assets/assets/join-icon.png": "76ef9f9696a810f60f1c1a64de6d6bb8",
"assets/assets/meta_image_300x200.png": "7ee9420e6bc3869f95aa530eaf1eeada",
"assets/assets/join-icon-selected.png": "0bcfa47ee5c9589969d40e6999b4514d",
"assets/assets/AUTHOR.md": "202a0586e9e7969a5b9637b3ee470983",
"assets/assets/icon/icon.png": "e869909b259fddf9613d4006a2e25d44",
"assets/assets/icon/android.png": "5fbc6fb814210c3dfb404714fbf5c055",
"assets/assets/icon/iphone.png": "b54caffbbd1de25ca29f9eec0f1837fe",
"assets/assets/icon/icon_solid.png": "3c22969edc96e273e40d8f4f668d3204",
"assets/assets/matu_party.gif": "07ce7827e071d16f9d8248b6c11f82c1",
"assets/assets/VERSION.txt": "631db2a383b797cbec90128c4811f853",
"assets/assets/scan-qr.png": "30652c28ab702d41eaea075deb2e3711",
"assets/assets/app-store-badge.png": "6fc6b9412e271f1cf7a640202f8fab37"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
