//Menu

let sideNav = document.getElementById("mobile-menu");

$('.menu-btn').on('click', function (e) {
  e.preventDefault();
  sideNav.style.left = "0px";
  $('body').addClass('disable');
  $('.overlay').addClass('active');
});
$('.close-menu').on('click', function (e) {
  e.preventDefault();
  sideNav.style.left = "-310px";
  $('body').removeClass('disable');
  $('.overlay').removeClass('active');
});

$('.overlay').on('click',function(){
  $('body').removeClass('disable');
  sideNav.style.left = "-310px";
  $(this).removeClass('active');  
});

let filterNav = document.getElementById("filter");

$('.filter-btn').on('click', function (e) {
  e.preventDefault();
  filterNav.style.left = "0px";
  $('body').addClass('disable');
  $('.overlay').addClass('active');
});
$('.close-filter').on('click', function (e) {
  e.preventDefault();
  filterNav.style.left = "-100%";
  $('body').removeClass('disable');
  $('.overlay').removeClass('active');
});

$('.overlay').on('click',function(){
  $('body').removeClass('disable');
  sideNav.style.left = "-100%";
  $(this).removeClass('active');  
});

// wow.js
new WOW().init();

// Slick sliders 

let apotheke__slider__settings = {
  arrows:false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,        
        centerMode: true,
        centerPadding: '30px'
      }
    }        
  ]  
}

// Slick sliders 

let clix_steps__slider__settings = {
  arrows:false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }    
  ]  
}

function tryInitSlider($sliderDv, settings, width) {
  const isInitialized = $sliderDv.hasClass('slick-initialized');
  if (window.innerWidth < width) {
      if (!isInitialized) {
        $sliderDv.slick(settings);
      }
  } else if (isInitialized) {
      setTimeout(function () {
        $sliderDv.slick('unslick');
      }, 100);
  }
}

function initSliders(){
  tryInitSlider($('.clix-steps'), clix_steps__slider__settings, 576);
  tryInitSlider($('.apotheke__slider'), apotheke__slider__settings, 1200);
}

initSliders();
$(window).resize(initSliders);


//search-close-clear-btn

$('.search-close-clear-btn').on('click',function(){
  $('.layout__header').toggleClass('active');
});

// Hidden menu

var layoutHeader = $('.layout__header');
$(window).resize(function(){
    var wid = $(window).width();
    if(wid > 768 && layoutHeader.hasClass('active')) {
      layoutHeader.removeClass('active');  
    } 
});

// Upload file 

$('.prescription__files').on('click', '.prescription-item', function(){
  $(this).toggleClass('checked');
  if($('.prescription__files .prescription-item').hasClass('checked')){
    $('.prescription__wrapper form .wrap-btn button').removeAttr('disabled');
  } else{
    $('.prescription__wrapper form .wrap-btn button').attr('disabled','disabled');
  }
});


//change tab login page
$('.login-type').change(function(){
  var val = $(this).val();
  $('.page-block__tab').hide();
  $('.page-block__tab[data-tab='+val+']').show();
});

//default tab open with attr checked
var loginTab = $('.login-type:checked').val();
$('.page-block__tab').hide();
$('.page-block__tab[data-tab='+loginTab+']').show();


//open password
$('.password-eye').click(function(){
  $(this).toggleClass('active');
  var input = $(this).closest('.password-field').find('input');
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});