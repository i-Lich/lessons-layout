@@include('../../node_modules/jquery/dist/jquery.min.js')
@@include('../../node_modules/slick-carousel/slick/slick.min.js')
// проверка браузера на поддержку webp
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}



testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});
// end проверка браузера на поддержку webp

//ibg
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();
//end ibg

//burger
$('.icon-menu').click(function () {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

//slider
$(document).ready(function(){
    $('.slider__body').slick({
        dots:true,
        arrows:false,
        infinite:true,
        adaptiveHeight:true,
        accessibility:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:3500

    });
});
// if ($('.slider__body').length > 0){
//
// }