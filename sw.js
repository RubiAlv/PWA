
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('mi-pwa-cache').then((cache) => {
        return cache.addAll([
          '/index.html',
            '/manifest.json',
            '/sw.js',
          '/css/est_productos.css',
          '/css/style.css',
          '/imagenes/img1.jpg',
          '/imagenes/img2.jpg',
          '/imagenes/img3.jpg',
          '/imagenes/img4.jpg',
          '/imagenes/img5.jpg',
          '/imagenes/logo.png',
          '/imagenes/cafe_frio.jpg',
          '/imagenes/capuccino.jpg',
          '/imagenes/cupcake.jpg',
          '/imagenes/frappe_brawnie.jpg',
          '/imagenes/frappe_vainilla.jpg',
          '/imagenes/mojito.jpg',
          '/imagenes/not.jpg',
          '/imagenes/pancake.jpg',
          '/imagenes/pastel.jpg',
          '/imagenes/red_Velvet.jpg',
          '/imagenes/repartidor.jpg',
          '/imagenes/smothi_mango.jpg',
          '/imagenes/tarta_manzana.jpg',
          '/views/faqs.html',
          '/css/estilos.css',
          '/js/funciones.js',
          '/js/notificaciones.js',
          '/views/mision.html',
          '/css/mision.css',
          '/imagenes/6.jpg',
          'imagenes/7.jpg',
          '/views/productos.html',
          '/css/login.css',
          '/views/login.html',
          '/imagenes/icons/maskable_icon_x72.png',
           '/imagenes/icons/maskable_icon_x96.png',
           '/imagenes/icons/maskable_icon_x128.png',
            '/imagenes/icons/maskable_icon_x512.png'
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
      icon: 'imagenes/logo.png'
    };
  
    event.waitUntil(
      self.registration.showNotification('Hola', options)
    );
  });
