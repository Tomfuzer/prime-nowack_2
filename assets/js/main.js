/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    wide: ["1281px", "1680px"],
    normal: ["981px", "1280px"],
    narrow: ["841px", "980px"],
    narrower: ["737px", "840px"],
    mobile: ["481px", "736px"],
    mobilep: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    offsetY: -15,
    hoverDelay: 0,
    alignment: "center",
  });

  // Nav.

  // Bar.
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $("#logo").html() +
      "</span>" +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible",
    });
})(jQuery);

// const image = document.querySelector(".image");

// image.addEventListener("mouseover", () => {
//   image.style.transform = "scale(1.1)";
//   image.style.transition = "transform 0.4s ease";
// });

// image.addEventListener("mouseout", () => {
//   image.style.transform = "scale(1)";
//   image.style.transition = "transform 0.4s ease";
// });

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function goToNextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function goToPrevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  function startSlideshow() {
    setInterval(goToNextSlide, 15000); // Troca de slide a cada 15 segundos (15000 milissegundos)
  }

  prevArrow.addEventListener("click", goToPrevSlide);
  nextArrow.addEventListener("click", goToNextSlide);

  showSlide(currentSlide);
  startSlideshow();
});

// document.addEventListener("DOMContentLoaded", function() {
//   const contactForm = document.querySelector("form");
  
//   contactForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
    
//     const subject = `Nova mensagem de ${name}`;
//     const mailtoLink = `mailto:destino@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0ADe:${name}%0AEmail:${email}`;
    
//     window.location.href = mailtoLink;
//   });
// });


