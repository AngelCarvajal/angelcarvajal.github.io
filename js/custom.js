$(document).ready(function() {
    //Funcion que cambia el logo en la barra de navegacion
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $('nav.navbar div a img#logoBlanco').css('display', 'none');
            $('nav.navbar div a img#logoNegro').css('display', 'block');
            $("#mainNav").addClass("navbar-shrink");
            console.log('La tiene');
        } else {
            $('img#logoNegro').css('display', 'none');
            $('img#logoBlanco').css('display', 'block');
            $("#mainNav").removeClass("navbar-shrink");
            console.log('No la tiene');
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);

});