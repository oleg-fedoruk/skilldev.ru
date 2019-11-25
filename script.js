$(function(){

var $btnTop = $('.btn_top');

var mobileButton = $('.mobile-menu');
var buttonStyle = $('.fa-bars');
var menu = $('.mobile-header-nav'); 
var buttonStyleSec = $('#icon');
var windowWidth = document.documentElement.clientWidth 


$(window).on('scroll', function(){ 
  if ($(window).scrollTop() >= 300)
  { $btnTop.fadeIn();}
  else {$btnTop.fadeOut()
  }}
      );

$(window).on('scroll', function(){ 
  if ($(window).scrollTop() >= 300 && windowWidth <= 767)
  {buttonStyleSec.addClass('fa-bars');
  buttonStyleSec.removeClass('fa-times'); 
  $(menu).hide();}
  }
      );

$btnTop.on('click', function(){
  $('html, body').animate({scrollTop:0}, 900)
});


$("body").on('click', '[href*="#second-page"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


$("body").on('click', '[href*="#slider"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$("body").on('click', '[href*="#third-page"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


$(document).ready(function(){
  $('.slider-elements').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="left-control" type="button"><img src="img/arrow.png" alt="Стрелка вправо" class="arrow"></button>',
    nextArrow: '<button class="right-control" type="button"><img  src="img/arrow.png" alt="Стрелка влево" class="arrow"></button>',
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

$(document).ready(function(){
  $('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" }); //specifying options


  $('form').each(function () {
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      focusInvalid: false,
      rules: {
        Телефон: {
          required: true,
        },
        Имя: {
          required: true,
          maxlength: 10,
        },
        Почта: {
          required: true,
        }
      },
      messages: {
        Телефон: {
          required: 'Введите номер телефона'
        },
        Имя: {
          required: 'Введите имя',
          maxlength: 'Можно ввести максимум 10 букв'
        },
        Почта: {
          required: 'Введите почту',
        }
      },

      submitHandler(form) {
      let th = $(form);

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize(),
    // eslint-disable-next-line func-names
  }).done(() => {

    console.log('Отправлено');

    th.trigger('reset');
});

    return false;
    }
  });
  });
});