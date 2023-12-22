

$('.slider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('#slider-div').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true
  });

  //

