var Piramide = function(ancho, largo, altura) {
	this.ancho = ancho;
	this.largo = largo;
	this.altura = altura;

	// funcion que calcula el volumen
	this.calcVolumen = function() {
		return this.ancho * this.largo * this.altura / 3;
	};
};