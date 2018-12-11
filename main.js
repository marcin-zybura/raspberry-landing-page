function changeHamburger(x) {
  x.classList.toggle("change");
  $(".navigation-mobile").slideToggle();
  $(".navigation").toggleClass("navigation--no-background");
  $(".header").toggleClass("navigation--background-shadow");
}

$("#title-section__button").on("click", () => {
  $(".shadow").toggle();
  $(".popup").fadeIn();
});

$(document).mouseup(function(e) 
{
    let container = $(".popup");
    console.log(e.target);
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.fadeOut();
        $(".shadow").hide();
        console.log(e.target);
    }
});