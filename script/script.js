
// 스크롤부드럽게
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// _________________________________

//   메인베너
const main = gsap.timeline();
main
    .from('.main_txt_01', {
        xPercent: innerWidth * -1,
        duration: 5
    },)
    .from(".main_01_01", {
        y: -100,
        opacity: 0,
        duration: 5
    }, 'txt2')
    .from(".main_01_02", {
        y: 100,
        opacity: 0,
        duration: 5
    }, 'txt1')
    .from(".main_01_03", {
        y: -100,
        opacity: 0,
        duration: 5
    }, 'txt2')
    .from(".main_01_04", {
        y: 100,
        opacity: 0,
        duration: 5
    }, 'txt1')
    .from('.main_txt_02', {
        xPercent: innerWidth * 1,
        duration: 5
    })
    .from('.main_txt_small', {
        y: -500,
        opacity: 0,
        duration: 5

    })
    .from('.main_02_03', {
        y: 500,
        opacity: 0,
        duration: 5
    })
    .from('.main_02_02', {
        y: 500,
        opacity: 0,
        duration: 5
    })
    .from('.main_02_01', {
        y: 500,
        opacity: 0,
        duration: 5
    })
    .from('.main_txt_03', {
        x: innerWidth * -1,
        duration: 5
    })
    .from('.main_03_01', {
        x: innerWidth * 1,
        duration: 5
    });
ScrollTrigger.create({
    animation: main,
    trigger: '.banner .wrap',
    strat: 'top top',
    end: '+=1000',
    scrub: true,
    pin: true, //스크롤 따라 애니메이션 따라 옴
    anticipatePin: 1, //핀효과 부드럽게
    markers: false
});

//   추천상품
var swiper = new Swiper(".reco", {
    slidesPerView: 2,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    }
});


const light = gsap.timeline();
light
    .from('.line1', {
        x:-460
    })
    .from('.line2', {
        x:-290
    });

ScrollTrigger.create({
    animation: light,
    trigger: ".recommended .wrap",
    start: "top 80%",
    end: "bottom bottom",
    // scrub: true, 끊기면서 애니메이션 진행됨
    // pin: true, 머무르게 하는 거
    // anticipatePin: 1, // 핀 효과를 부드럽게 줄 수 있음.
    markers: false,
});
//________________

// 인기상품__________________________________________________________________
const best = gsap.timeline();
best.from('.best .line',{
    x:-400
});

ScrollTrigger.create({
    animation: best,
    trigger: '.best .best_bg',
    start:'top 50%',
    end:'bottom bottom'
});

$(function(){
    $('.best_left li').click(function(){
        $(this).addClass('show').siblings().removeClass('show');
    });

    $('.best_left_01').click(function(){
        $('.best_img_01').addClass('img_show').siblings().removeClass('img_show')
    });

    $('.best_left_02').click(function(){
        $('.best_img_02').addClass('img_show').siblings().removeClass('img_show')
    });

    $('.best_left_03').click(function(){
        $('.best_img_03').addClass('img_show').siblings().removeClass('img_show')
    });

    $('.best_left_04').click(function(){
        $('.best_img_04').addClass('img_show').siblings().removeClass('img_show')
    });

    $('.best_left_05').click(function(){
        $('.best_img_05').addClass('img_show').siblings().removeClass('img_show')
    });
});

// 브랜드 소개_____________________________________________________________

const intro = gsap.timeline();
intro
.from('.brand .blue, .brand .green, .brand .orange',{
    x: 690
})
.from('.brand .yellow',{
    x: -690
})
.from('.brand .img_01, .brand .img_02',{
    y: -567
})
.from('.brand .img_03',{
    y: 500
})
.from('.brand .txt',{
    opacity:0
});

ScrollTrigger.create({
    animation:intro,
    trigger: '.brand .wrap',
    start:'top 50%',
    end:'bottom bottom'
});

// 카테고리____________________________________________________________
const category = gsap.timeline();
category.from('.category .line',{
    x:-251
});

ScrollTrigger.create({
    animation: category,
    trigger: '.category .wrap',
    start:'top 50%',
    end:'bottom bottom'
});

// 시즌베너___________________________________________________________
$(document).ready(function(){
    $('.item li').hover(function(){
        $(this).animate({
            top: -20
        }),
        $(this).animate({
            top: 0
        });
    });
});
