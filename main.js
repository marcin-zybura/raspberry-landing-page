// Handle hamburger menu and mobile menu
function changeHamburger(x) {
  x.classList.toggle("change");
  $(".navigation-mobile").slideToggle();
  $(".navigation").toggleClass("navigation--no-background");
  $(".header").toggleClass("navigation--background-shadow");

  if ($(window).height() <= 620) {
    $(".header-title").toggle();
  }
}

// Show popup
$("#title-section__button").on("click", () => {
  $(".shadow").toggle();
  $(".popup").fadeIn();
});

// Close popup on click outside
$(document).mouseup(function(e) {
    let container = $(".popup");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.fadeOut();
        $(".shadow").hide();
    }
});

// Handle popup form submit
$(".popup-form").on("submit", (e) => {
  const apiUrl = "https://recruitment-api.pyt1.stg.jmr.pl/login";
  const email = $("#popup-email").val();
  const password = $("#popup-password").val();
  const correctEmail = "correct_login@example.com";
  const correctPassword = "C0rr3Ct_P@55w0rd";
  const data = {
    "login": email,
    "password": password
  };

  function postData(apiUrl, data) {
      return fetch(apiUrl, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      })
      .then(response => response.json());
  }

  const clearLoginMessage = (msg) => {
    setTimeout(() => {
      $(`.${msg}`).text("");
    }, 2000);
  }

  const clearEmailMessage = (msg) => {
    setTimeout(() => {
      $(`.${msg}`).fadeOut();
    }, 2000);
  }

  if (validateEmail(email)) {
    postData(apiUrl, data)
    .then(
      (data) => {
        console.log(JSON.stringify(data));
        if (email === correctEmail && password === correctPassword) {
          $(".login-success").text(data.message);
          clearLoginMessage("login-success");
        }
        else {
          $(".login-failure").text(data.message);
          clearLoginMessage("login-failure");
        }
      }
    )
    .catch((error) => {
      console.error(error);
    });
  }
  else {
    $(".email-error").fadeIn();
    clearEmailMessage("email-error");
  }

  postData(apiUrl, data)
  .then(
    data => console.log(JSON.stringify(data))
  )
  .catch(error => console.error(error));

  e.preventDefault();
});

// Regex email format validation
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}