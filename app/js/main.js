
$(document).ready(function(){
  $('.pluses-advantage__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"> &lt;</button>',
    nextArrow: '<button type="button" class="slick-next"> &gt;</button>',
    responsive: [
      {
        breakpoint: 803,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        }
      }
    ]
  });


  $('.high-score__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"> &lt;</button>',
    nextArrow: '<button type="button" class="slick-next"> &gt;</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplaySpeed: 2000,
          infinite: true,
        }
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplaySpeed: 2000,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 2000,
          infinite: true,
          prevArrow: '<button type="button" class="slick-prev"> &lt;</button>',
          nextArrow: '<button type="button" class="slick-next"> &gt;</button>',
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          infinite: true,
          prevArrow: '<button type="button" class="slick-prev"> &lt;</button>',
          nextArrow: '<button type="button" class="slick-next"> &gt;</button>',
        }
      }
    ]
  })

  $('.humburger').on('click', ()=> $('.header__body').toggleClass('header__body_active'))

  $('.main-courses-list__item').on('click', function() {
    $(this).find('.main-courses-list__prev').toggleClass('main-courses-list__prev_active')
    $(this).find('.main-courses-list__descr').toggleClass('active')
  });
})