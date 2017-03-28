$(document).ready(function () {

  var colors = [];

  function updateColor () {

    if (!colors.length) {
      console.warn('No hay colores disponibles.');
      return;
    }

    var index = Math.round(Math.random() * (colors.length - 1));
    var color = colors[index];

    $('header').css('background-color', color);
  }

  // Cargar colores
  $('#load').on('click', function () {
    $.ajax({
      type: 'get',
      url: '/colors',
      success: function (colorsList) {
        colors = colorsList;
        console.info('La lista de colores ha sido actualizada.');
      }
    });
  });

  // Actualizar color
  $('#update').on('click', function () {
    updateColor();
  });

  // Perfilar actualizaciones
  $('#profile').on('click', function () {

    console.log('Iniciando perfilado');
    console.profile('updateColor()');

    // Realizar 10 mil llamadas a la función y analizar su rendimiento.
    for (var i = 0; i < 10000; i++) {
      updateColor();
    }

    console.profileEnd();
    console.info('El perfilado ha finalizado');
  });

});
