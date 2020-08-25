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


// File upload 

function handleFileSelect() {
  //Check File API support
  if (window.File && window.FileList && window.FileReader) {

      var files = event.target.files; //FileList object
      var output = document.querySelector('.prescription__files');

      for (var i = 0; i < files.length; i++) {
          var file = files[i];
          //Only pics
          if (!file.type.match('image')) continue;

          var picReader = new FileReader();
          picReader.addEventListener("load", function (event) {
              var picFile = event.target;
              var div = document.createElement("div");
              div.setAttribute('class', 'prescription-item');
              div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" + "title='" + picFile.name + "'/>";
              output.insertBefore(div, null);
          });
          //Read the image
          picReader.readAsDataURL(file);
      }
  } else {
      console.log("Your browser does not support File API");
  }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

// $('.prescription-item').on('click',function(){
//   console.log('werwrwr');
//   this.toggleClass('checked');
// });