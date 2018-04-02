$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change');
  })

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
})