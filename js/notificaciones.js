function mostrarNotificacion() {
  if (Notification.permission === 'granted') {
    const notificacion = new Notification('Nuevas bebidas!!!', {
      body: 'disfruta de unas bebidas refrescantes en cafetería oh lala',
      icon: '../imagenes/not.jpg'
    });

    notificacion.addEventListener('click', () => {
      // Acción cuando el usuario hace clic en la notificación
      console.log('El usuario hizo clic en la notificación');
    });
  }
}
function envios() {
  if (Notification.permission === 'granted') {
    const notificacion = new Notification('Gracias por tu compra!!!', {
      body: 'Tu pedido esta en camino',
      icon: '../imagenes/repartidor.jpg'
    });

    notificacion.addEventListener('click', () => {
      // Acción cuando el usuario hace clic en la notificación
      console.log('El usuario hizo clic en la notificación');
    });
  }
}
  