window.onscroll = function () {
  scrollFunction();
};
const headerBurger = document.querySelector(".header__burger");
const menuItems = document.querySelector(".menu__items");

function scrollFunction() {
  let scrollPos = 50;
  let header = document.getElementById("header");

  if (
    document.body.scrollTop > scrollPos ||
    document.documentElement.scrollTop > scrollPos
  ) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  if(headerBurger.classList.contains('active')){
    document.body.classList.remove('lock');
    headerBurger.classList.remove('active');
    menuItems.classList.remove('active');
  }
}

$("a.yakor").on("click", function (event) {
  var $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - document.querySelector('header').offsetHeight ,
      },
      {
        duration:1000,
        specialEasing: {
          width: "linear",
          height: "easeInOutCubic",
        },
      }
    );
  event.preventDefault();
});
$("a.products").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 200,
        },
        {
          duration: 1000,
          specialEasing: {
            width: "linear",
            height: "easeInOutCubic",
          },
        }
      );
    event.preventDefault();
  });

  

$('[href = "#cakeA"]').click(function () {
  $("#cookies").slideUp(500);
  $("#mafins").slideUp(500);
  $("#glazurS").slideUp(500);
  $("#vaflis").slideUp(500);
  $("#profitrolis").slideUp(500);
  $("#tistechkas").slideUp(500);
  $("#ruletys").slideUp(500);
  $("#cakes").slideToggle(500);
});
$('[href = "#cookieA"]').click(function () {
  $("#cakes").slideUp(500);
  $("#mafins").slideUp(500);
  $("#glazurS").slideUp(500);
  $("#vaflis").slideUp(500);
  $("#profitrolis").slideUp(500);
  $("#tistechkas").slideUp(500);
  $("#ruletys").slideUp(500);
  $("#cookies").slideToggle(500);
});
$('[href = "#glazurA"]').click(function () {
  $("#cakes").slideUp(500);
  $("#mafins").slideUp(500);
  $("#cookies").slideUp(500);
  $("#vaflis").slideUp(500);
  $("#profitrolis").slideUp(500);
  $("#tistechkas").slideUp(500);
  $("#ruletys").slideUp(500);
  $("#glazurS").slideToggle(500);
});
$('[href = "#mafinA"]').click(function () {
  $("#cakes").slideUp(500);
  $("#cookies").slideUp(500);
  $("#glazurS").slideUp(500);
  $("#vaflis").slideUp(500);
  $("#profitrolis").slideUp(500);
  $("#tistechkas").slideUp(500);
  $("#ruletys").slideUp(500);
  $("#mafins").slideToggle(500);
});
$('[href = "#vafliA"]').click(function () {
  $("#cakes").slideUp(500);
  $("#cookies").slideUp(500);
  $("#glazurS").slideUp(500);
  $("#mafins").slideUp(500);
  $("#profitrolis").slideUp(500);
  $("#tistechkas").slideUp(500);
  $("#ruletys").slideUp(500);
  $("#vaflis").slideToggle(500);
});
$('[href = "#profitroliA"]').click(function () {
  $("#cakes").slideUp(500);
  $("#cookies").slideUp(500);
  $("#glazurS").slideUp(500);
  $("#mafins").slideUp(500);
  $("#vaflis").slideUp(500);
  $("#tistechkas").slideUp(500);
  $("#ruletys").slideUp(500);
  $("#profitrolis").slideToggle(500);
});
$('[href = "#tistechkaA"]').click(function () {
  $("#cakes").slideUp(500);
  $("#cookies").slideUp(500);
  $("#glazurS").slideUp(500);
  $("#mafins").slideUp(500);
  $("#vaflis").slideUp(500);
  $("#profitrolis").slideUp(500);
  $("#ruletys").slideUp(500);
  $("#tistechkas").slideToggle(500);
});
$('[href = "#ruletyA"]').click(function () {
  $("#cakes").slideUp(500);
  $("#cookies").slideUp(500);
  $("#glazurS").slideUp(500);
  $("#mafins").slideUp(500);
  $("#vaflis").slideUp(500);
  $("#profitrolis").slideUp(500);
  $("#tistechkas").slideUp(500);
  $("#ruletys").slideToggle(500);
});

$('[href = "#close"]').click(function () {
  $("#cakes").slideUp(500);
  $("#mafins").slideUp(500);
  $("#glazurS").slideUp(500);
  $("#vaflis").slideUp(500);
  $("#cookies").slideUp(500);
  $("#profitrolis").slideUp(500);
  $("#tistechkas").slideUp(500);
  $("#ruletys").slideUp(500);
});

new Swiper('.swiper',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    autoHeight:true,
    effect:'fade',
    fadeEffect:{
        crossFade:true
    },
    autoplay:{
      delay:3000,
      stopOnLastSlide:true,
      disableOnInteraction:false
    }

});

$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.menu__items').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


let menuArrows = document.querySelectorAll('.menu__arrow');
if(menuArrows.length > 0){
  for (let i = 0; i < menuArrows.length; i++){
    const menuArrow = menuArrows[i];
    menuArrow.addEventListener("click", function(e){
      menuArrow.parentElement.classList.toggle('__active');
    });
  }
}

