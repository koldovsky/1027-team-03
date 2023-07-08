$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    animateOut: true,
    responsiveRefreshRate: 10,
    responsiveBaseElement: 'body',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        670:{
            items:2
        },

    }
})


const firstCircle = document.querySelector('.green-circle-first-slide');
const secondCircle = document.querySelector('.green-circle-second-slide');
const thirdCircle = document.querySelector('.green-circle-third-slide');
const fourthCircle = document.querySelector('.green-circle-fourth-slide');

const scaleStickVer = document.querySelector('.stick-ver');
const openChar = document.querySelector('.open-characteristics');


const nextBtn = document.querySelector('.owl-next');
const prevBtn = document.querySelector('.owl-prev');
const owlNav = document.querySelector('.owl-nav')
const owlCarousel = document.querySelector('.owl-carousel')


owlCarousel.insertBefore(prevBtn, owlCarousel.firstChild);
owlCarousel.appendChild(nextBtn);
nextBtn.innerHTML = '<svg class="arrow-svg_1j4" viewBox="0 0 30 30"><defs><path d="M19.533 15l-9.1-9.45c-.577-.6-.577-1.5 0-2.1.578-.6 1.445-.6 2.023 0l10.11 10.5c.29.3.434.75.434 1.05 0 .45-.144.75-.433 1.05l-10.111 10.5c-.29.3-.578.45-1.012.45-.433 0-.722-.15-1.01-.45-.578-.6-.578-1.5 0-2.1l9.1-9.45z" id="a-1685741027029"></path></defs><use fill-rule="nonzero" opacity=".8" xlink:href="#a-1685741027029"></use></svg>';
prevBtn.innerHTML = '<svg class="arrow-svg_1j4" viewBox="0 0 30 30"><defs><path d="M19.533 15l-9.1-9.45c-.577-.6-.577-1.5 0-2.1.578-.6 1.445-.6 2.023 0l10.11 10.5c.29.3.434.75.434 1.05 0 .45-.144.75-.433 1.05l-10.111 10.5c-.29.3-.578.45-1.012.45-.433 0-.722-.15-1.01-.45-.578-.6-.578-1.5 0-2.1l9.1-9.45z" id="a-1685741027029"></path></defs><use fill-rule="nonzero" opacity=".8" xlink:href="#a-1685741027029"></use></svg>';
owlNav.remove();


openChar.addEventListener('click', function() {
    scaleStickVer.classList.toggle('opacity-stick');
});

let count = 1;
nextBtn.addEventListener('click', function(){
    count = count+=1 > 4 ? 1 : count+=1;
})

prevBtn.addEventListener("click", function(){
    count = count-=1 < 0 ? 4 : count-=1;
})


if(count === 1){
    firstCircle.classList.add('opacity-circle');
    secondCircle.classList.remove('opacity-circle');
    thirdCircle.classList.remove('opacity-circle');
    fourthCircle.classList.remove('opacity-circle');
}else if(count === 2){
    firstCircle.classList.remove('opacity-circle');
    secondCircle.classList.add('opacity-circle');
    thirdCircle.classList.remove('opacity-circle');
    fourthCircle.classList.remove('opacity-circle');
}else if(count === 3){
    firstCircle.classList.remove('opacity-circle');
    secondCircle.classList.remove('opacity-circle');
    thirdCircle.classList.add('opacity-circle');
    fourthCircle.classList.remove('opacity-circle');
}else if(count === 4){
    firstCircle.classList.remove('opacity-circle');
    secondCircle.classList.remove('opacity-circle');
    thirdCircle.classList.remove('opacity-circle');
    fourthCircle.classList.add('opacity-circle');
}