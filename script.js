function enviarCorreo() {
    var correoDestino = 'kevinfernandezur@gmail.com';
    var mensaje = 'Saludos, Me interesan sus servicios.';

    window.location.href = 'mailto:' + correoDestino + '?subject=Interesado%20en%20sus%20servicios&body=' + encodeURIComponent(mensaje);
  }