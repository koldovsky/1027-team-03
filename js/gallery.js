const carousel = document.querySelector('.animated-carousel');
const carouselInner = carousel.querySelector('.animated-carousel__inner');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const productCards = carouselInner.querySelectorAll('.product-card');

let slidesPerView = 1;
let currentIndex = 0;

function updateSlidesPerView() {
    if (window.innerWidth >= 1024) {
        slidesPerView = 3;
    } else if (window.innerWidth >= 768) {
        slidesPerView = 2;
    } else {
        slidesPerView = 1;
    }
    updateCarousel();
}

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * (100 / slidesPerView)}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, productCards.length - slidesPerView);
    updateCarousel();
});

window.addEventListener('resize', updateSlidesPerView);

updateSlidesPerView();