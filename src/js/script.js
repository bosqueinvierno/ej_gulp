$(document).ready(function () {

  /* esconde los campos */
  $('#figura').on('change', function(ef) {
    // valor del select
    var valor = $(this).val();

    if (valor == 'esfera') {
      $('#radio').removeClass('hide');
      $('#ancho').addClass('hide');
      $('#largo').addClass('hide');
      $('#altura').addClass('hide');
    } else if (valor == 'cubo') {
      $('#radio').addClass('hide');
      $('#ancho').removeClass('hide');
      $('#largo').removeClass('hide');
      $('#altura').removeClass('hide');
    } else if (valor == 'piramide') {
      $('#radio').addClass('hide');
      $('#ancho').removeClass('hide');
      $('#largo').removeClass('hide');
      $('#altura').removeClass('hide');
    }
  });

  /* formulario que calcula volumen de la figura */
  $('#form-figura').on('submit', function(e) {
    e.preventDefault();

    var figura = $('#figura').val();

    if (figura == "esfera") {

      var radio = parseInt($('#radio input').val() || 0);
      var esfera = new Esfera(radio);
      $('#datos-figura').html(esfera.calcVolumen());

    } else if (figura == "cubo") {

      var ancho = parseInt($('#ancho input').val() || 0);
      var largo = parseInt($('#largo input').val() || 0);
      var altura = parseInt($('#altura input').val() || 0);

      var cubo = new Cubo(ancho, largo, altura);
      $('#datos-figura').html(cubo.calcVolumen());

    } else if (figura == "piramide") {

      var a = parseInt($('#ancho input').val() || 0);
      var l = parseInt($('#largo input').val() || 0);
      var alt = parseInt($('#altura input').val() || 0);

      var piramide = new Piramide(a, l, alt);
      $('#datos-figura').html(piramide.calcVolumen());

    }
    console.log('calculado');
  });
});

