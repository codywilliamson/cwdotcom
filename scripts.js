
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=> {
      // Toggle nav
      nav.classList.toggle('nav-active');

      // Animate links
      navLinks.forEach((link,index) => {
        if (link.style.animation) {
          link.style.aniamtion = ``;
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      };
    });

    //burger animation
    burger.classList.toggle('toggle');
    ( '.nav-link a' ).on("click", function(){
          nav.removeClass('nav-active');
        });

        ( '.nav-link a' ).on("click", function(){
          nav.removeClass('nav-active');
        });
    });
};

navSlide();
