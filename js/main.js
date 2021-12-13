// start recenlty vewied
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
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
        slidesPerView: 1,
        spaceBetween: 15 
        },
        600: {
        slidesPerView: 3.5,
        spaceBetween: 20
        },
        1000: {
        slidesPerView: 2,
        spaceBetween: 20
        },
    }
});


// start swiper for brands
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 5.5,
    spaceBetween: 10,
    freeMode: true,
    loop:true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

// start swiper for most veiwed & related
var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 3,
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
        slidesPerView: 1,
        spaceBetween: 15 
        },
        600: {
        slidesPerView: 3.5,
        spaceBetween: 20
        },
        1000: {
        slidesPerView: 3,
        spaceBetween: 20
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

$(".delete-this").click(function () {
    toastr.success("Delete cart");
});

$(".remove-button").click(function () {
    toastr.success("Remove All");
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
$(".content").css("display", "block");
$(".item-header:first,.icon:first").toggleClass("active");
$(".item-header").click(function () {
    $(this).next().slideToggle(500);
    $(this).find(".icon").toggleClass("active");
    $(this).toggleClass("active");
});


// swiper page product details
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    // freeMode: true,
    loop:true,
    direction: 'vertical',
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: 'horizontal',

        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
            direction: 'horizontal',
        },
        1000: {
            slidesPerView: 5,
            spaceBetween: 60,
            direction: 'vertical',
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            direction: 'vertical',
        },
    }
});

// show small img to big image page product details
$(".vertical-swiper img").mouseover(function () {
    var imageSrc = $(this).attr("src");
    $(".big-image img").attr("src", imageSrc);
});

// Change Active Color For Product Deatails
const colors = document.querySelectorAll(".color");
function changeColor() {
    colors.forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
}
colors.forEach((c) => c.addEventListener("click", changeColor));


// collapse category filter
// $(".content-collapse").css("display", "block");
// $(".item-header-collapse:first,.icon:first").toggleClass("active");
$(".item-header-collapse").click(function () {
    $(this).next().slideToggle(500);
    $(this).find(".icon").toggleClass("active");
    $(this).toggleClass("active");
});


// grid - list for page categories
$(document).ready(function (){
    $('.gridListBtn').on('click',function (e){
        e.preventDefault();
        var type = $(this).attr('id');
        // console.log(type);
        if(type == 'list'){
            // container control
            $('.ul-filter').removeClass('list-view-filter');
            $('.ul-filter').removeClass('grid-view-filter');
            $('.ul-filter').addClass('list-view-filter ');
        } else if(type == 'grid'){
            // container control
            $('.ul-filter').removeClass('list-view-filter');
            $('.ul-filter').removeClass('grid-view-filter');
            $('.ul-filter').addClass('grid-view-filter');
        }
    });
});

// this for show area when select city modal shipping
$(document).on('change','.select-this',function(){
        document.getElementById("area-select").style.display = 'block';
});


// fuunction delete one box-cart in page cart
$(document).on('click','.delete-this',function(){
    var id=$(".delete-cart").attr('alt');
    $('.delete-cart'+"."+id).remove();
});

// function button remove all in page cart 
$(document).on('click','.remove-button',function(){
    var id=$(".box-cart").attr('alt');
    $('.box-cart'+"."+id).remove();
});

// function button remove all in page order
$(document).on('click','.remove-button',function(){
    var id=$(".order-all").attr('alt');
    $('.order-all'+"."+id).remove();
});

// start login system effect class
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const formm = document.querySelector(".formm");
formm.classList.remove("sign-up-mode");
sign_up_btn.addEventListener("click", () => {
    formm.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    formm.classList.remove("sign-up-mode");
});

// zoom product details
var w = window.innerWidth;
if (w > 991) {
$("#outerzoom").imagezoomsl({
    zoomrange: [0, 0],
    classmagnifier: "outer-magnifier",
    classcursorshade: "cursorshade",
    classstatusdiv: "statusdiv",
    classtextdn: "textdn",
    classtracker: "outer-tracker",
});
}




