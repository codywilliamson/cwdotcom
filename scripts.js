$('.nav__trigger',).on('click', function(e){
     e.preventDefault();
     $(this).parent().toggleClass('nav--active').show();
   });

$('.nav li').on('click', function(){
  $(".nav__trigger").parent().removeClass("nav--active");
  $(".nav__icon").removeClass("nav--active");
});

var myNav = document.querySelector("nav");
var nav = document.querySelector(".nav__list");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    nav.classList.add("scrolled");
    myNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    myNav.classList.remove("scrolled");
  }
};
