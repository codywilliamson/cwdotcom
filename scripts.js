/*
  smooth scroll from w3schools
  link: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
*/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// full screen mobile menu
$('.nav__trigger',).on('click', function(e){
     e.preventDefault(); // prevent default behavior
     $(this).parent().toggleClass('nav--active').show(); //add nav--active class to nav icon
     $('body').toggleClass('no-scroll'); //disable scroll behind nav
   });
// clicking on a link or anywhere in the nav closes the menu and enables scroll on body
$('.nav li, .nav').on('click', function(){
  $(".nav__trigger").parent().removeClass("nav--active");
  $(".nav__icon").removeClass("nav--active");
  $('body').removeClass('no-scroll');
});

// on desktop, adds scrolled class to nav
var myNav = document.querySelector("nav");
var nav = document.querySelector(".nav__list");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    nav.classList.add("scrolled");
    myNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    myNav.classList.remove("scrolled");
  }
};
