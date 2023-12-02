self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('mi-pwa-cache').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/views/mision.html',
          '/css/mision.css',
          '/imagenes/6.jpg',
          'imagenes/7.jpg'
          // Agrega aquí todos los archivos que quieres cachear
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  