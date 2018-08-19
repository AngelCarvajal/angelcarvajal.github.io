$(document).ready(function() {
  //Titulo de las redes sociales
  $('[data-toggle="tooltip"]').tooltip();

  //funcion para la barra de navegacion y el logo
	var navbarCollapse = function() {
    	if ($("#mainNav").offset().top > 100) {
    		$('nav.navbar div a img#logoBlanco').css('display', 'none');
    		$('nav.navbar div a img#logoNegro').css('display', 'block');
      		$("#mainNav").addClass("navbar-shrink");
    	} else {
    		$('nav.navbar div a img#logoBlanco').css('display', 'block');
    		$('nav.navbar div a img#logoNegro').css('display', 'none');
      		$("#mainNav").removeClass("navbar-shrink");
    	}
  	};
  	// Collapse now if page is not at top
  	navbarCollapse();
  	// Collapse the navbar when page is scrolled
  	$(window).scroll(navbarCollapse);
});