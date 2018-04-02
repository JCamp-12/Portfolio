$(document).ready(function(){
  //navbar-toggler
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change');
  })
//adding background and fixed
  $(window).scroll(function(){  
    let position = $(this).scrollTop();
    console.log(this);
    if(position >= 149){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })
  //smooth scroll
  $('.nav-item a').click(function(link){
    link.preventDefault();
    
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 3000);
  })
})