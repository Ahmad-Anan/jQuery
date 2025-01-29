/// <reference types="../@types/jquery" />







const currentSection = $("#about").offset().top

$(window).on('scroll', function () {

    if ($(window).scrollTop() > currentSection) {

        $('nav').css('backgroundColor', 'rgba(255,0,0,0.7)')
        $('.backToTop').fadeIn(1000)
        $('.backToTop').css('display', 'flex')

    } else {
        $('nav').css('backgroundColor', 'transparent')
        $('.backToTop').css('display', 'none')
    }


})

$('.backToTop').on('click', function () {

    $('html,body').animate({ scrollTop: 0 }, 500)
})

$('nav #navbarSupportedContent a[href^="#"]').on('click', function () {

    const curentSecttion = $(this).attr('href')
    const currentScrollTop = $(curentSecttion).offset().top

    $('html,body').animate({ scrollTop: currentScrollTop }, 500)


})


$('.colorBox span').eq(0).css('backgroundColor', 'rgb(255,0,0)')
$('.colorBox span').eq(1).css('backgroundColor', 'rgba(0,255,0)')
$('.colorBox span').eq(2).css('backgroundColor', 'rgb(0,0,255)')
$('.colorBox span').eq(3).css('backgroundColor', 'rgb(120,0,255)')
$('.colorBox span').eq(4).css('backgroundColor', 'rgb(120,50,140)')
$('.colorBox span').eq(5).css('backgroundColor', 'rgb(0,255,255)')



const currentWidth = $('.colorBox').innerWidth()


$('.colorBoxIcon').on('click', function () {

    if ($('.colorBox').css('left') == '0px') {

        $('.colorBox').animate({ 'left': -currentWidth + 'px' }, 500)

    } else {
        $('.colorBox').animate({ 'left': '0px' }, 500)

    }


})


$('.colorBox span').on('click', function () {
    const currentColor = $(this).css('backgroundColor')
    $('.changeColor').css('color', currentColor)
})







$(document).ready(function () {
    $(".skitter-large").skitter({
        velocity:1,
        auto_play:false,
        with_animations:['cube' , 'paralell']
    });
});










// $(window).on('load' , function(){

//     $('.loadingScreen').fadeOut(2000)
//     $('body').css('overflow' , 'auto')

// })


// $(document).ready(function () {

//         $('.loadingScreen').fadeOut(2000)
//         $('body').css('overflow' , 'auto')

// })