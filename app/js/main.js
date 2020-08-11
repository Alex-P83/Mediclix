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
