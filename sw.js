self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('mi-pwa-cache').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/css/est_productos.css',
          '/css/style.css',
          '/imagenes/img1.jpg',
          '/imagenes/img2.jpg',
          '/imagenes/img3.jpg',
          '/imagenes/img4.jpg',
          '/imagenes/img5.jpg',
          '/imagenes/logo.png',
          '/views/faqs.html',
          '/css/estilos.css',
          '/js/funciones.js',
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

  self.addEventListener('push', (event) => {
    const options = {
      body: 'Bienvenido a Cafeteria Oh lala',
      icon: 'imagenes/not.jpg'
    };
  
    event.waitUntil(
      self.registration.showNotification('Hola', options)
    );
  });