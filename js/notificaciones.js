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

// Llama a la función para mostrar la notificación cuando sea necesario
// mostrarNotificacion();

  