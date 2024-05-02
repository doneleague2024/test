$(function(){
    $('.slider').slick();
    //$(クラス名).slick();で使用できます。
})
$(function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:2000,
        fade:true,
        arrows: true,
        dots: true, // インジケーター
    });
})
