$(function(){

    $('.header__slider').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../../build/img/arrows-left.svg" alt="Назад">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../../build/img/arrows-right.svg" alt="Далее">',
        asNavFor: '.slider-dotshead'

    });

    $('.slider-dotshead').slick({
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
        asNavFor: '.slider-map'
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });
    $('.holder__slider').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../../build/img/arrows-left.svg" alt="Назад">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../../build/img/arrows-right.svg" alt="Далее">',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../../build/img/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="../../build/img/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

});