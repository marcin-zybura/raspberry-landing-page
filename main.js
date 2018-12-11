function changeHamburger(x) {
  x.classList.toggle("change");
  $(".navigation-mobile").slideToggle();
  $(".navigation").toggleClass("navigation--no-background");
  $(".header").toggleClass("navigation--background-shadow");

  if ($(window).height() <= 620) {
    $(".header-title").toggle();
  }
}

$("#title-section__button").on("click", () => {
  $(".shadow").toggle();
  $(".popup").fadeIn();
});

$(document).mouseup(function(e) 
{
    let container = $(".popup");
    // console.log(e.target);
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.fadeOut();
        $(".shadow").hide();
        // console.log(e.target);
    }
});

$(".popup-form").on("submit", (e) => {
  const apiUrl = "https://recruitment-api.pyt1.stg.jmr.pl/login";
  const email = $("#popup-email").val();
  const password = $("#popup-password").val();

  // const body = JSON.stringify(
  //   {
  //     "login": email,
  //     "password": password
  //   }
  // );

  const body = {
    "login": "correct_login@example.com",
    "password": "C0rr3Ct_P@55w0rd"
  }

  const otherParam = {
    headers: {
      "Content-Type": "application/json"
    },
    body: body,
    method: "POST",
    mode: "no-cors"
  }

  // fetch(apiUrl, otherParam)
  // .then(data => {
  //   return data.json();
  // })
  // .then(res => {
  //   console.log(res);
  // })
  // .catch(error => {
  //   console.log(error);
  // })

  // let xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "https://recruitment-api.pyt1.stg.jmr.pl/login", true);
  // xhttp.setRequestHeader("Content-type", "application/json");
  // // xhttp.send("fname=Henry&lname=Ford");
  // xhttp.send(`login=${email}&password=${password}`);

  // fetch(apiUrl, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: {
  //     "login": email,
  //     "password": password
  //   }
  // })
  // .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  // .then(response => {
  //     console.log(response);
  // })
  // .catch(err => {
  //     console.log("u");
  //     alert("sorry, there are no results for your search");
  // });

//   let body = {
//     "login": email,
//     "password": password
//   }

  function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", apiUrl, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(body);
}

  UserAction();



  e.preventDefault();
});