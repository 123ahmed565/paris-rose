// start recenlty vewied
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
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
        slidesPerView: 1.5,
        spaceBetween: 15 
        },
        600: {
        slidesPerView: 3.5,
        spaceBetween: 20
        },
        1000: {
        slidesPerView: 4.5,
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


// Start Taostr js to alert
toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "100",
    timeOut: "2000",
    extendedTimeOut: "60000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

$(".deleted").click(function () {
    toastr.success("Delete Done");
});

$(".add-to-cart").click(function () {
    toastr.success("Add To Cart");
});

$(".add-to-heart").click(function () {
    toastr.success("Add To Wishlest");
});


// start add active color to bottom menu mobile
$(document).on('click','.active-color',function(){
    $('.active-color').css("color", "#F3F0F0");
    $(this).css("color", "var(--colorText)");
});



// increase and decrease number in canvas menu for product
$('.input-group').on('click', '.button-add', function() {
    var quantity=$('.quantity').val();
    $('.quantity').val(parseInt(quantity)+1);
});

$('.input-group').on('click', '.button-minuse', function() {
    var quantity=$('.quantity').val();
    $('.quantity').val(parseInt(quantity)-1);
});


// fuunction delete one box of canvas cart
$(document).on('click','.deleted',function(){
    var id=$(".delete-box").attr('alt');
    $('.delete-box'+"."+id).remove();
});

// modal search popup for mobile
$('a[href="#search"]').click(function() {
    event.preventDefault()
    $("#search-box").addClass("-open");
    setTimeout(function() {
    inputSearch.focus();
    }, 800);
});

$('a[href="#close"]').click(function() {
    event.preventDefault()
    $("#search-box").removeClass("-open");
});

$(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
    $("#search-box").removeClass("-open");
    }
});


// to top
const scrollBtn= document.querySelector(".scroll-to-top");
const upperbar =document.querySelector('.upperbar');

scrollBtn.style.display="none";

scrollBtn.addEventListener("click",()=>{
document.body.scrollTop=0;
document.documentElement.scrollTop=0;
});

document.addEventListener("scroll",(e)=>{
if(document.documentElement.scrollTop <=100){
scrollBtn.style.display="none";
}else
{
scrollBtn.style.display="block";
}
});

// preloader
window.onload = function () {
    document.querySelector(".preloaders").style.display = "none";
};

// collapse canvas boddy mobile
// $(".content").css("display", "block");
// $(".item-header:first,.icon:first").toggleClass("active");
$(".item-header").click(function () {
    $(this).next().slideToggle(500);
    $(this).find(".icon").toggleClass("active");
    $(this).toggleClass("active");
});