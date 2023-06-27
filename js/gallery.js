const carousel = document.querySelector('.animated-carousel');
const carouselInner = carousel.querySelector('.animated-carousel__inner');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const productCards = carouselInner.querySelectorAll('.product-card');

let slidesPerView = 1;
let currentIndex = 0;

function updateSlidesPerView() {
  if (window.innerWidth >= 768) {
      slidesPerView = 2;
  } else {
      slidesPerView = 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const totalSlides = productCards.length;
  const offset = currentIndex % totalSlides;
  carouselInner.style.transform = `translateX(-${offset * (100 / slidesPerView)}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + productCards.length) % productCards.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % productCards.length;
  updateCarousel();
});

window.addEventListener('resize', updateSlidesPerView);

updateSlidesPerView();