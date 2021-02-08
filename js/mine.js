$(document).ready(function(){
  const flowersSwiper = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
       
      }
    }
  });

  const reviewssSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $('#bouquet-1').on('click', function() {

    $.fancybox.open([
      {
  //       // src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        src : 'images/bouquet-1.jpg',
        opts : {
          caption : 'First caption',
          thumb   : 'images/bouquet-1-250.jpg'
        }
      },
      {
        src  : 'images/bouquet-2.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : 'images/bouquet-2-250.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });
  $("#bouquets").on('click', function() {

    $.fancybox.open([
      {
        // src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        src : 'images/bouquet-1.jpg',
        opts : {
          caption : 'First caption',
          thumb : 'images/bouquet-1-250.jpg'
          //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        //src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        src : 'images/bouquet-2.jpg',
        opts : {
          caption : 'Second caption',
          thumb : 'images/bouquet-2-250.jpg'
          //thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });
});