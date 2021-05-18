$('#carousel').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    focusOnSelect: true,
    autoplay: false,
    speed: 3000,
    responsive: [
        {
        breakpoint: 767.98,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            
            }
        }

    ]
});