const carousel = document.querySelector('.gallery_js_carousel');
const carouselInner = carousel.querySelector('.gallery_js_content');
const prevButton = carousel.querySelector('.gallery_js_btn_left');
const nextButton = carousel.querySelector('.gallery_js_btn_right');
const productCards = carouselInner.querySelectorAll('.gallery_image');

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