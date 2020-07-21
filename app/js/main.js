$(function(){



  
});

// Slick sliders 

let apotheke__slider = $('.apotheke__slider');

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

if(window.innerWidth < 1200){
    apotheke__slider.slick(apotheke__slider__settings);
}

//Resize slider
$(window).resize(function (e) {
  if (window.innerWidth > 1200) {
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


// Slick sliders 

let clix_steps__slider = $('.clix-steps');

let clix_steps__slider__settings = {
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

if(window.innerWidth < 1200){
  clix_steps__slider.slick(clix_steps__slider__settings);
}

//Resize slider
$(window).resize(function (e) {
  if (window.innerWidth > 1200) {
    if ($(clix_steps__slider).hasClass('slick-initialized')) {
      $(clix_steps__slider).slick('unslick');
    }
  }
  else {
      if(!$(clix_steps__slider).hasClass('slick-initialized')){
        $(clix_steps__slider).slick(clix_steps__slider__settings);
    }    
  }
});