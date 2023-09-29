window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var navigationLinks = document.querySelectorAll(".navbar-wrap ul li a");
    var logo = document.querySelector(".logo img");

    for (var i = 0; i < navigationLinks.length; i++) {
      if (scrollPosition > 100) {
        navigationLinks[i].classList.add("black-text", "scroll");
        logo.src = "assets/img/logo/logo.png";
      } else {
        navigationLinks[i].classList.remove("black-text", "scroll");
        logo.src = "assets/img/logo/w_logo.png";
      }
    }
  });