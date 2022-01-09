// start recenlty vewied
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop:false,
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
    loop:false,
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
        slidesPerView: 7.5,
        spaceBetween: 5
        },
    }
});

// start swiper for most veiwed & related
var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:false,
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
    loop:false,
    direction: 'vertical',
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
    $('.box-cart').remove();
});

// function button remove all in page order
$(document).on('click','.remove-button',function(){
    $('.order-all').remove();
});

// start login system effect class  
var formm=$('.formm');
formm.remove('.sign-up-mode');

$(document).on('click','#sign-up-btn',function(){
    formm.addClass('sign-up-mode');
});

$(document).on('click','#sign-in-btn',function(){
    formm.removeClass('sign-up-mode');
});


// change two class  between icon heart
$(document).ready(function(){
    $(document).on('click','.change-between',function(){
        if($(this).hasClass('far')){
            $(this).removeClass('far');
            $(this).addClass('fas');
        }
        else{
            $(this).removeClass('fas');
            $(this).addClass('far');
        }
    });
});


// $(document).ready(function(){
// $('.add-to-cart').click(function(){
// $('.box-canvas-cart').append(
//     `         
//     <div class="row">
//         <div class="col-6">
//             <img src="./images/offers/offer-1.png" alt="image product" loading="lazy">
//         </div>
//         <div class="col-6">
//             <p class="m-0 p-0 text-dark">Excellence Black Edition 128 GB / 13 Pro</p>
//             <p class="mt-2 mb-2 text-dark">2,222,00 EGP</p>
//             <a style="cursor: pointer;">
//                 <p class="text-decoration-underline deleted">Remove</p>
//             </a>
//         </div>
//     </div>
//     <form action="#">
//         <div class="input-group mb-1">
//             <button class="m-2 mt-1 button-add" type="button" id="button-addon2">+</button>
//             <input type="number" class="form-control quantity  text-center" min="1" step="1" max="10"
//                 value="1" aria-label="count number" aria-describedby="button-addon2">
//             <button class="m-2 mt-1 button-minuse" type="button" id="button-addon">-</button>
//         </div>
//     </form>`
// );
// });
// });


// $(document).ready(function(){
//     $(".quick-veiw").click(function(){
//         $('#exampleModal-2').modal('toggle');
//     });
//     $(".quick-veiw").mouseover(function(){
//         var w = window.innerWidth;
//         if (w > 991) {
//         $("#outerzoom").imagezoomsl({
//             zoomrange: [0, 0],
//             classmagnifier: "outer-magnifier",
//             classcursorshade: "cursorshade",
//             classstatusdiv: "statusdiv",
//             classtextdn: "textdn",
//             classtracker: "outer-tracker",
//         });
//         }
//     });
// });



// // zoom product details
$(".quick-veiw").imagezoomsl(function(){
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
});






