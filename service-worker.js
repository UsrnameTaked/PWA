self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',  // URL raíz
        '/index.html',  // otros recursos a cachear
        '/estilos.css',
        '/icon.png',
        'service-worker.js',
        'wordle.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(registration => {
      console.log('Service Worker registrado con éxito:', registration);
  })
  .catch(error => {
      console.log('Error al registrar el Service Worker:', error);
  });
}

