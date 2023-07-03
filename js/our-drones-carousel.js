
//-------------------Next & Prev BTNS & active-circle-green & animation carousel--------------------
const firstCircle = document.querySelector('.green-circle-first-slide');
const secondCircle = document.querySelector('.green-circle-second-slide');
const thirdCircle = document.querySelector('.green-circle-third-slide');
const fourthCircle = document.querySelector('.green-circle-fourth-slide');

const carouselSlides = document.querySelector('.slider-our-drones');

const prevBtn = document.querySelector('.left-arrow');
const nextBtn = document.querySelector('.right-arrow');
firstCircle.classList.add('opacity-circle');
let move = 0;
let currentIndex = 0;


function nextSlide() {
    move -= 513;
    if(move < -1026){move = 0}
    currentIndex = currentIndex+1 > 3 ? 0 : currentIndex+1;
    appdateCarouselNext();
    appdateGreenCircles()
}

function prevSlide() {
    move += 513;
    if(move > 0){move = -1026}
    currentIndex = currentIndex-1 < 0 ? 3 : currentIndex-1;
    appdateCarouselPrev()
    appdateGreenCircles();
}

function appdateCarouselNext() {
    carouselSlides.style.left = move + 'px';
}

function appdateCarouselPrev() {
    carouselSlides.style.left = move + 'px';
}

function appdateGreenCircles() {
    if (currentIndex === 0) {
        firstCircle.classList.add('opacity-circle');
        secondCircle.classList.remove('opacity-circle');
        thirdCircle.classList.remove('opacity-circle');
        fourthCircle.classList.remove('opacity-circle');
    } else if (currentIndex === 1) {
        firstCircle.classList.remove('opacity-circle');
        secondCircle.classList.add('opacity-circle');
        thirdCircle.classList.remove('opacity-circle');
        fourthCircle.classList.remove('opacity-circle');
    } else if (currentIndex === 2) {
        firstCircle.classList.remove('opacity-circle');
        secondCircle.classList.remove('opacity-circle');
        thirdCircle.classList.add('opacity-circle');
        fourthCircle.classList.remove('opacity-circle');
    } else if (currentIndex === 3) {
        firstCircle.classList.remove('opacity-circle');
        secondCircle.classList.remove('opacity-circle');
        thirdCircle.classList.remove('opacity-circle');
        fourthCircle.classList.add('opacity-circle');
    }
}


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
