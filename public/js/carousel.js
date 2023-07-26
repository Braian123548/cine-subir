const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

let counter = 0;
const intervalTime = 3000; // Cambia de imagen cada 3 segundos
const slideWidth = images[0].clientWidth;

function nextSlide() {
  if (counter >= images.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

setInterval(nextSlide, intervalTime);
