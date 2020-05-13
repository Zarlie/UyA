// ACORDEÓN
$(document).ready(function(){
    $('.collapsible').collapsible();
});


// CARROUSEL
let carouselElems = document.querySelectorAll(".carousel");
$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
});
