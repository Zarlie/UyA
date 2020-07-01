// Barra de navegación
var sidenavElems = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenavElems, {});

var parallaxElems = document.querySelectorAll(".parallax");
M.Parallax.init(parallaxElems, {});


// Carrousel 
var pages = document.querySelectorAll(".carousel-item button");

for(var i=0; i<pages.length;i++) {
    pages[i].addEventListener("click", function(e){
      e.stopPropagation();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
        duration: 200,
        indicators: true,
  });

  window.next = function() {
        var el = document.querySelector(".carousel");
        var l = M.Carousel.getInstance(el);
        l.next(1);
  }
});


// Carousel 2
$(document).ready(function(){
  $('.slider').slider();
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel-cards");
  var instances = M.Carousel.init( elems, {
      duration: 0,
      indicators: false,
  });
});


// Perfil de usuario
$(document).ready(function() {
  $('ul.tabs').tabs();
});

