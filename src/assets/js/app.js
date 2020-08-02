$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
    });
});
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
        const placemarks = [
            {
                coords: [53.190699, 50.187959],
                icon: 'assets/img/marker.svg',
                icon_size: [50, 50],
                icon_offset: [-25, -25], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
            },
        ];

        placemarks.forEach(function(item){
            const obj = new ymaps.Placemark(
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
    $('.slider__in').owlCarousel({
        loop: true,
        dots: false,
        items: 1,
        smartSpeed: 1600,
        margin: 0,
        nav: false,
        mouseDrag: false,
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
            $('.slider__item-count').text('0' + this.items().length);
        },
        onChanged: function () {
            $('.slider .owl-item').removeClass('hover-on-promo');
        }
    });

    $('.js-slider-prev').on('click', function sliderPrevSlide () {
        $('.slider__in').trigger('prev.owl.carousel');
    });
    $('.js-slider-next').on('click', function sliderNextSlide () {
        $('.slider__in').trigger('next.owl.carousel');
    });

    const triggerElem = $('.slider .owl-item');
    triggerElem.on('mouseenter', function triggerElemMouseEnter () {
        $(this).siblings('.owl-item').addClass('hover-on-promo');
    });
    triggerElem.on('mouseleave', function triggerElemMouseLeave () {
        $(this).siblings('.owl-item').removeClass('hover-on-promo');
    });
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
            $('.product__count').text('0' + this.items().length);
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
        // animationEffect: 'slide-in-in',
        touch: false
    });
});
$(() => {
    $('.js-popup__close').on('click', function toggleMenu(e) {
        e.preventDefault();
        $.fancybox.close();
    });
});
$(() => {
    $('.js-scroll-top').on('click', function scrollToTop() {
        $('html, body').animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
$(() => {
    $('.js-toggle-menu').on('click', function toggleMenu() {
        $('body').toggleClass('show-menu');
    });
    $('.js-header__overlay').on('click', function hideMenu() {
        $('body').removeClass('show-menu');
    });
});
$(() => {
    //sticky header
    if ( $(window).width() > 1200 ) {
        $(window)
            .scroll(function windowScroll() {
                if ($(this).scrollTop() > 4) {
                    $('body').addClass('sticky');
                }
                else {
                    $('body').removeClass('sticky');
                }
            });
    } else {
        $(window)
            .scroll( function windowScroll() {
                $('.header__hamb').removeClass('active');
                $('.main-nav').slideUp(0);

                if ($(this).scrollTop() > 260) {
                    $('body').addClass('sticky');
                }
                else {
                    $('body').removeClass('sticky');
                }
            });
    }
});
$(() => {
    $('.case-slider__in').owlCarousel({
        loop: true,
        dots: false,
        items: 3,
        smartSpeed: 1200,
        margin: 30,
        nav: false,
        mouseDrag: false,
        responsive : {
            0   : {
                items: 1,
                autoHeight: true,
            },
            700 : {
                items: 2,
            },
            1200 : {
                autoHeight: false,
                items: 3,
            }
        },
    });

    $('.js-case-slider__prev').on('click', function caseSliderPrevSlide () {
        $('.case-slider__in').trigger('prev.owl.carousel');
    });
    $('.js-case-slider__next').on('click', function caseSliderNextSlide () {
        $('.case-slider__in').trigger('next.owl.carousel');
    });
});

$(() => {

    let galleries = $('.product-page__slider-list');

    Array.prototype.forEach.call(galleries, function(el, i) {
            const $this = $(el);
            const $owl1 = $this.find('.product-page__slider-top');
            const $owl2 = $this.find('.product-page__slider-bot');
            let flag = false;
            let duration = 300;

            $owl1
                .owlCarousel({
                    startPosition: 0,
                    items: 1,
                    loop: true,
                    margin: 0,
                    nav: false,
                    dots: false,
                    smartSpeed: 1200,
                    autoplay: false,
                    responsiveClass: true
                })
                .on("changed.owl.carousel", function(e) {
                    if (!flag) {
                        flag = true;
                        $owl2
                            .find(".owl-item")
                            .removeClass("current")
                            .eq(e.item.index)
                            .addClass("current");
                        if (
                            $owl2
                                .find(".owl-item")
                                .eq(e.item.index)
                                .hasClass("active")
                        ) {
                        } else {
                            $owl2.trigger("to.owl.carousel", [e.item.index, duration, true]);
                        }
                        flag = false;
                    }
                });

            $owl2
                .on("initialized.owl.carousel", function() {
                    $owl2
                        .find(".owl-item")
                        .eq(0)
                        .addClass("current");
                })
                .owlCarousel({
                    startPosition: 0,
                    loop: true,
                    margin: 20,
                    nav: false,
                    smartSpeed: 1200,
                    dots: false,
                    responsive : {
                        0   : {
                            items: 1
                        },
                        600 : {
                            items: 2
                        },
                        1200: {
                            items: 3
                        },
                    },
                    responsiveClass: true
                })
                .on("click", ".owl-item", function(e) {
                    e.preventDefault();
                    var number = $(this).index();
                    $owl1.trigger("to.owl.carousel", [number, duration, true]);
                });
        });


    $('.js-product-page__slider-prev').on('click', function productSliderPrevSlide () {
        $('.product-page__slider-top').trigger('prev.owl.carousel');
    });
    $('.js-product-page__slider-next').on('click', function productSliderNextSlide () {
        $('.product-page__slider-top').trigger('next.owl.carousel');
    });

    // accordion tabs
    $('.product-page__accordion:first-child').addClass('active').find('.product-page__accordion-descr').show();
    $('.product-page__slider-item:not(:first-child)').hide();
    $('.product-page__slider-item:first-child').find('.product-page__slider-loader').hide();
    $('.product-page__accordion-title').on('click', function accordionClick() {

        const accordion = $(this).parent('.product-page__accordion');

        if (!(accordion.hasClass('active'))) {
            $('.product-page__accordion').removeClass('active').find('.product-page__accordion-descr').slideUp();
            $('.product-page__slider-item').hide();

            accordion.addClass('active');
            accordion.find('.product-page__accordion-descr').slideDown();
            $('.product-page__slider-item[data-accordion="' + accordion.attr('data-accordion') + '"]').find('.product-page__slider-loader').fadeIn('fast');
            $('.product-page__slider-item[data-accordion="' + accordion.attr('data-accordion') + '"]').fadeIn('fast');
            setTimeout(() => {
                $('.product-page__slider-item[data-accordion="' + accordion.attr('data-accordion') + '"]').find('.product-page__slider-loader').fadeOut('slow');
            }, 500);

        };
    });
});


$(() => {
    let state = {};
    // state management
    function updateState(newState) {
        state = { ...state, ...newState };
        console.log(state);
    }

    // event handlers
    $('.feed .js-file-input').change(function(e) {
        let files = $('.feed .js-file-input')[0].files;
        let filesArr = Array.from(files);
        updateState({ files: files, filesArr: filesArr });

        renderFileList();
    });

    $('.feed .file-list').on('click', '.js-file__button', function(e) {
        e.preventDefault();
        console.log('clicked on file delete');
        let key = $(this)
            .parent()
            .attr('key');
        let curArr = state.filesArr;
        curArr.splice(key, 1);
        updateState({ filesArr: curArr });
        renderFileList();
    });

    // render functions
    function renderFileList() {
        let fileMap = state.filesArr.map((file, index) => {
            let suffix = 'bt';
            let size = file.size;
            if (size >= 1024 && size < 1024000) {
                suffix = 'kb';
                size = Math.round(size / 1024 * 100) / 100;
            } else if (size >= 1024000) {
                suffix = 'mb';
                size = Math.round(size / 1024000 * 100) / 100;
            }

            return (`<div class="file" key="${index}">
                        <div class="file__name">${file.name}</div>
                        <div class="file__size">${size} ${suffix}</div>
                        <button class="file__button js-file__button" type="button">
                            <svg width="23" height="24">
                                <use xlink:href="#cross"></use>
                            </svg>
                        </button>
                    </div>`);
        });

        $('.feed .file-list').html(fileMap);
    };
});
$(() => {
    let state = {};
    // state management
    function updateState(newState) {
        state = { ...state, ...newState };
        console.log(state);
    }

    // event handlers
    $('.popup--call .js-file-input').change(function(e) {
        let files = $('.popup--call .js-file-input')[0].files;
        let filesArr = Array.from(files);
        updateState({ files: files, filesArr: filesArr });

        renderFileList();
    });

    $('.popup--call .file-list').on('click', '.js-file__button', function(e) {
        e.preventDefault();
        console.log('clicked on file delete');
        let key = $(this)
            .parent()
            .attr('key');
        let curArr = state.filesArr;
        curArr.splice(key, 1);
        updateState({ filesArr: curArr });
        renderFileList();
    });

    // render functions
    function renderFileList() {
        let fileMap = state.filesArr.map((file, index) => {
            let suffix = 'bt';
            let size = file.size;
            if (size >= 1024 && size < 1024000) {
                suffix = 'kb';
                size = Math.round(size / 1024 * 100) / 100;
            } else if (size >= 1024000) {
                suffix = 'mb';
                size = Math.round(size / 1024000 * 100) / 100;
            }

            return (`<div class="file" key="${index}">
                        <div class="file__name">${file.name}</div>
                        <div class="file__size">${size} ${suffix}</div>
                        <button class="file__button js-file__button" type="button">
                            <svg width="23" height="24">
                                <use xlink:href="#cross"></use>
                            </svg>
                        </button>
                    </div>`);
        });

        $('.popup--call .file-list').html(fileMap);
    };
});