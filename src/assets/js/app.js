$(() => {
    let myMap;
    ymaps.ready(init);
    function init(){
        myMap = new ymaps.Map("map", {
            center: [53.190699, 50.187959],
            globalPixelCenter: [56,34],
            zoom: 16,
            scrollZoom: false,
            controls: [],
        }, {suppressMapOpenBlock: true});

        // myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom');
        var placemarks = [
            {
                coords: [53.190699, 50.187959],
                icon: 'assets/img/marker.svg',
                icon_size: [50, 50],
                icon_offset: [-25, -25], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
            },
        ];

        placemarks.forEach(function(item){
            var obj = new ymaps.Placemark(
                item.coords,
                {},
                {
                    iconLayout: 'default#image',
                    iconImageHref: item.icon,
                    iconImageSize: item.icon_size,
                    iconImageOffset: item.icon_offset,
                }
            );
            myMap.geoObjects.add(obj);
        });
    };
});
$(() => {
    $(".js-tel").mask("+7 (999) 999-99-99");
});

$(() => {
    $('.products__slider').owlCarousel({
        loop: false,
        dots: false,
        items: 3,
        smartSpeed: 800,
        margin: 30,
        nav: false,
        mouseDrag: true,
        // navText: ["<svg width='28' height='9'> <use xlink:href='#steps__arrow--prev'></use></svg><span class='ml-3 d-none d-xl-block'>Предыдущий шаг</span>","<span class='mr-3 d-none d-xl-block'>Следующий шаг</span><svg width='28' height='9'> <use xlink:href='#steps__arrow--next'></use></svg>"],
        responsive : {
            0   : {
                autoHeight: true
            },
            1200 : {
                autoHeight: false
            }
        },
        onInitialized: function(e) {
            $('.product__count').text('0' + this.items().length)
            console.log();
        }
    });
});
$(() => {
    $('.reward__brands-slider').owlCarousel({
        loop: false,
        dots: false,
        items: 11,
        smartSpeed: 800,
        margin: 30,
        nav: false,
        mouseDrag: true,
        center: true,
        loop: true,
        // navText: ["<svg width='28' height='9'> <use xlink:href='#steps__arrow--prev'></use></svg><span class='ml-3 d-none d-xl-block'>Предыдущий шаг</span>","<span class='mr-3 d-none d-xl-block'>Следующий шаг</span><svg width='28' height='9'> <use xlink:href='#steps__arrow--next'></use></svg>"],
        responsive : {
            0   : {
                autoHeight: true
            },
            1200 : {
                autoHeight: false
            }
        },
    });
});
$(() => {
    $('.news__slider').owlCarousel({
        loop: false,
        dots: false,
        items: 3,
        smartSpeed: 800,
        margin: 30,
        nav: false,
        mouseDrag: true,
        // navText: ["<svg width='28' height='9'> <use xlink:href='#steps__arrow--prev'></use></svg><span class='ml-3 d-none d-xl-block'>Предыдущий шаг</span>","<span class='mr-3 d-none d-xl-block'>Следующий шаг</span><svg width='28' height='9'> <use xlink:href='#steps__arrow--next'></use></svg>"],
        responsive : {
            0   : {
                autoHeight: true
            },
            1200 : {
                autoHeight: false
            }
        },
    });
});
$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration: 600,
        animationEffect: 'slide-in-in',
        touch: false
    });
});