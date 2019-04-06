$('.nav__trigger',).on('click', function(e){
     e.preventDefault();
     $(this).parent().toggleClass('nav--active').show();
   });

$('.nav li').on('click', function(){
  $(".nav__trigger").parent().removeClass("nav--active");
  $(".nav__icon").removeClass("nav--active");
});
