function changeHamburger(x) {
  x.classList.toggle("change");
  $(".navigation-mobile").slideToggle();
  $(".navigation").toggleClass("navigation--no-background");
  $(".header").toggleClass("navigation--background-shadow");
}