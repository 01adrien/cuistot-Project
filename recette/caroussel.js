/*jshint esversion: 6 */

let autoSwip = true;
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

if (autoSwip === false) {
  prev.addEventListener("click", () => {
    minusSlides();
  });

  next.addEventListener("click", () => {
    plusSlides();
  });

  let random = Math.floor(Math.random() * 4) + 1;
  let slideIndex = random;
  showSlides(slideIndex);

  function plusSlides() {
    showSlides((slideIndex += 1));
  }

  function minusSlides() {
    showSlides((slideIndex -= 1));
  }

  function showSlides(n) {
    let i;
    if (n >= slides.length + 1) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" select", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " select";
  }
}

if (autoSwip === true) {
  prev.style.display = "none";
  next.style.display = "none";

  let slideIndex = 0;
  showSlides();
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  function showSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" select", "");
    }

    if (slideIndex > 4) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " select";
    console.log(slideIndex);
    setTimeout(showSlides, 2000);
  }
}
