$(function(){



  
});

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

//Resize window
// var overlay = $('.overlay'); 
// var menu = $();
// $(window).resize(function(){
//     var wid = $(window).width();
//     if(wid > 570 && blockMenu.is(':hidden')) {
//         blockMenu.removeAttr('style');
//     } 
// }); 


// wow.js
new WOW().init();

// Slick sliders 

// let apotheke__slider = $('.apotheke__slider');

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
        slidesToShow: 3,
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

// if(window.innerWidth < 1200){
//     apotheke__slider.slick(apotheke__slider__settings);
// }

//Resize slider
// $(window).resize(function (e) {
//   if (window.innerWidth >= 1200) {
//     if (apotheke__slider.hasClass('slick-initialized')) {
//       setTimeout(function(){
//           apotheke__slider.slick('unslick');
//       }, 100);
//     }
//   }
//   else {
//       if(!apotheke__slider.hasClass('slick-initialized')){
//         apotheke__slider.slick(apotheke__slider__settings);
//     }    
//   }
// });


// Slick sliders 

//let clix_steps__slider = $('.clix-steps');

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

// if(window.innerWidth < 575){
//   clix_steps__slider.slick(clix_steps__slider__settings);
// }

// //Resize slider
// $(window).resize(function (e) {
//   if (window.innerWidth >= 575) {
//     if (clix_steps__slider.hasClass('slick-initialized')) {
//       setTimeout(function(){
//         clix_steps__slider.slick('unslick');
//       }, 100);
      
//     }
//   }
//   else {
//       if(!clix_steps__slider.hasClass('slick-initialized')){
//         clix_steps__slider.slick(clix_steps__slider__settings);
//     }    
//   }
// });

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

