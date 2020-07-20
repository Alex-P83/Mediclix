$(function(){



  
});

// Slick sliders 

let apotheke__slider = $('.apotheke__slider');

let apotheke__slider__settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
}

if(window.innerWidth < 768){
    apotheke__slider.slick(apotheke__slider);
}

//Resize slider
$(window).resize(function (e) {
  if (window.innerWidth > 768) {
    if ($(apotheke__slider).hasClass('slick-initialized')) {
      $(apotheke__slider).slick('unslick');
    }
  }
  else {
      if(!$(apotheke__slider).hasClass('slick-initialized')){
        $(apotheke__slider).slick(apotheke__slider__settings);
    }    
  }
});