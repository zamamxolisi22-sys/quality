
self.addEventListener('install', e => {
  e.waitUntil(caches.open('deltric-v1').then(c => c.addAll(['/','/index.html','/assets/css/styles.css'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
