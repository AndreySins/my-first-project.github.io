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