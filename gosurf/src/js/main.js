$(function(){

    $('.header__slider').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../../build/img/arrows-left.svg" alt="Назад">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../../build/img/arrows-right.svg" alt="Далее">',
        asNavFor: '.slider-dots'

    });

    $('.slider-dots').slick({
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header__slider'
    });

    $('.surf-slider').slick({
        dots:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../../build/img/arrows-left.svg" alt="Назад">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../../build/img/arrows-right.svg" alt="Далее">',
    });
});