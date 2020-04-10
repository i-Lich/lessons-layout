$(window).on("scroll", function() {
    // Если высота больше 200px
    // Добавляем классу header класс fixed
    if ($(window).scrollTop() > 100) {
        $('.header-bottom').addClass('fixed');
        $('.right-menu').removeClass('d-block');
        $('.right-menu-fixed').addClass('d-block');
    }
    // Иначе удаляем класс fixed
    else {
        $('.header-bottom').removeClass('fixed');
        $('.right-menu-fixed').removeClass('d-block');
        $('.right-menu').addClass('d-block');
        // $('.right-menu-fixed').remove('d-none');
    }
});

$(function(){
    $('.items-click').click(function(){
        $('.lsp-block-content').addClass('items');
        $('.list-click').removeClass('active');
        $('.items-click').addClass('active');
    });
    $('.list-click').click(function(){
        $('.lsp-block-content').removeClass('items');
        $('.items-click').removeClass('active');
        $('.list-click').addClass('active');
    });
});
