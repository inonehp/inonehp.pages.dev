// v.1.0.0

// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
// service-worker.js
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});


var version = "1.0.0";


//https://github.com/mdn/pwa-examples
self.addEventListener('install', (e) => {

e.waitUntil(
caches.open(version).then((cache) => cache.addAll([

'/',
'/js/main.js',
'/js/ad.js',
'/data/adsJsonVar.js',
'/css/light.css',
'/css/dark.css',
'/css/style-main.css',

'index.html',
'style.css',
'script.js'

])),
  );
});




