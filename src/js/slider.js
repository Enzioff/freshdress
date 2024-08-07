import Swiper, {EffectCoverflow, EffectFade, Mousewheel, Navigation, Pagination, Thumbs, Zoom} from "swiper";

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('[data-slider]');

    sliders.forEach(slider => {
        if (slider.dataset.slider === 'showcase') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, EffectCoverflow, Zoom],
                centeredSlides: true,
                watchOverflow: true,
                effect: 'coverflow',
                slidesPerView: 'auto',
                initialSlide: 1,
                spaceBetween: 90,
                observer: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true
                },
                watchSlidesProgress: true,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',

                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
                breakpoints: {
                    1529: {
                        spaceBetween: 140,
                    }
                },
                zoom: true,
            })
        } else if (slider.dataset.slider === 'slider') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Zoom],
                slidesPerView: 'auto',
                spaceBetween: 16,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                wrapperClass: 'slider__wrapper',

                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
                breakpoints: {
                    1529: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    }
                },
                zoom: true,
            })
        } else if (slider.dataset.slider === 'cards') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Pagination, EffectCoverflow, Zoom],
                effect: "coverflow",
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 255,
                    depth: 430,
                    modifier: 1,
                    slideShadows: false
                },
                loop: true,
                watchSlidesProgress: true,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',

                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
                pagination: {
                    el: '.slider__pagination',
                    bulletClass: 'slider__pagination-bullet',
                    bulletActiveClass: 'slider__pagination-bullet--active',
                    clickable: true,
                },
                zoom: true,
            })
        } else if (slider.dataset.slider === 'stock') {
            const swiperThumbs = new Swiper('.slider--info', {
                slidesPerView: 1,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                zoom: true,
            })
            const swiper = new Swiper(slider, {
                modules: [Navigation, Pagination, Thumbs, Zoom],
                slidesPerView: 'auto',
                spaceBetween: 16,
                centeredSlides: false,
                watchSlidesProgress: false,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
                pagination: {
                    el: '.slider__pagination',
                    bulletClass: 'slider__pagination-bullet',
                    bulletActiveClass: 'slider__pagination-bullet--active',
                    clickable: true,
                },
                breakpoints: {
                    1529: {
                        spaceBetween: 24,
                        centeredSlides: true,
                        watchSlidesProgress: true,
                    }
                },
                thumbs: {
                    swiper: swiperThumbs,
                },
                zoom: true,
            })
        } else if (slider.dataset.slider === 'categories') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Pagination, Zoom],
                slidesPerView: 'auto',
                spaceBetween: 16,
                centeredSlides: false,
                watchSlidesProgress: false,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                keyboard: {enabled: false, onlyInViewport: false,}, mousewheel: {invert: true,},
                edgeSwipeDetection: true,
                nested: true,
                breakpoints: {
                    1529: {
                        spaceBetween: 44,
                    }
                },
                zoom: true,
            })
        } else if (slider.dataset.slider === 'features') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Pagination, Zoom],
                slidesPerView: 'auto',
                spaceBetween: 30,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                keyboard: {enabled: false, onlyInViewport: false,}, mousewheel: {invert: true,},
                edgeSwipeDetection: true,
                nested: true,
                breakpoints: {
                    1529: {
                        slidesPerView: 3,
                    }
                },
                zoom: true,
            })
        } else if (slider.dataset.slider === 'news') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Zoom],
                slidesPerView: 1,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
                zoom: true,
            })
        } else if (slider.dataset.slider === 'picture') {
            const swiperThumbs = new Swiper('.slider--thumbs-pictures', {
                modules: [Mousewheel, Navigation, Zoom],
                slidesPerView: 4,
                spaceBetween: 14,
                mousewheel: true,
                direction: 'vertical',
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                navigation: {
                    nextEl: '.slider__button--next',
                },
                zoom: true,
            })
            const swiper = new Swiper(slider, {
                modules: [Thumbs, Pagination, Zoom],
                slidesPerView: 1,
                slideClass: 'slider__item',
                slideActiveClass: 'slider__item--active',
                slideNextClass: 'slider__item--next',
                slidePrevClass: 'slider__item--prev',
                slideVisibleClass: 'slider__item--visible',
                wrapperClass: 'slider__wrapper',
                thumbs: {
                    swiper: swiperThumbs,
                },
                pagination: {
                    clickable: true,
                    el: '.slider__pagination',
                    type: 'bullets',
                },
                zoom: true,
            })
        }
    })
})

