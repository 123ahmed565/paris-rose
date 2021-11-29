// start recenlty vewied
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5.5,
    spaceBetween: 30,
    loop:true,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
        slidesPerView: 2.5,
        spaceBetween: 15 
        },
        600: {
        slidesPerView: 3.5,
        spaceBetween: 20
        },
        1000: {
        slidesPerView: 5.5,
        spaceBetween: 20
        },
    }
});


// swiper for brands
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 5.5,
    spaceBetween: 10,
    freeMode: true,
    loop:true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
        slidesPerView: 2.5,
        spaceBetween: 15 
        },
        600: {
        slidesPerView: 4.5,
        spaceBetween: 20
        },
        1000: {
        slidesPerView: 5.5,
        spaceBetween: 5
        },
    }
});