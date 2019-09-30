$(function(){

var $btnTop = $('.btn_top');

$(window).on('scroll', function(){ 
  if ($(window).scrollTop() >= 100)
  { $btnTop.fadeIn();}
  else {$btnTop.fadeOut()
  }}
      );

$btnTop.on('click', function(){
  $('html, body').animate({scrollTop:0}, 900)
});


var mobileButton = $('#mobile-menu');
var buttonStyle = $('.fa-bars');
var menu = $('#mobile-header-nav'); 

$(document).ready(function(){
  $('.slider-elements').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<button id="right-control" type="button"><img src="img/arrow.png" alt="Стрелка вправо" class="arrow"></button>',
    nextArrow: '<button id="left-control" type="button"><img  src="img/arrow.png" alt="Стрелка влево" class="arrow"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]

  });
});

  mobileButton.click(function() {
    buttonStyle.toggleClass('fa-times')
    $(menu).slideToggle();
  });


  $('.phone-button').click(function(){

  $('#popup-container__callback').fadeIn(1000);
  document.body.style.overflow = "hidden";

  })

  $('#popup-container__callback').click(function(event){
    if (event.target == this){
      $(this).fadeOut(500);
      document.body.style.overflow = "";}
  })

  $('.popup-submit').click(function(event){
    if (event.target == this){
      $('#popup-container__callback').fadeOut(500);
      document.body.style.overflow = "";}
  })


  $('.standart-button').click(function(){

    $('#popup-container__getinfo').fadeIn(1000);
    document.body.style.overflow = "hidden";
  
    })
  
    $('#popup-container__getinfo').click(function(event){
      if (event.target == this){
        $(this).fadeOut(500);
        document.body.style.overflow = "";}
    })
  
    $('.popup-submit').click(function(event){
      if (event.target == this){
        $('#popup-container__getinfo').fadeOut(500);
        document.body.style.overflow = "";}
    })

})