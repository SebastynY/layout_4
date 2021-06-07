
const slides = document.querySelectorAll('.reviews__slider__item'),
      prev = document.querySelector('.reviews__arrows-radius-prev'),
      next = document.querySelector('.reviews__arrows-radius-next'),
      slidesWrapper = document.querySelector('.reviews__slider'),
      slidesField = document.querySelector('.reviews__slider-inner'),
      width = window.getComputedStyle(slidesWrapper).width;

let slideIndex = 1;
let offset = 0;

slidesField.style.width = 33 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '.6s all';

slidesWrapper.style.overflow = "hidden";


slides.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    if (offset === +width.slice(0, width.length - 2)) {
        offset = 0;
    }else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2);
    }else {
        offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
});




// function showSlides(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     }

//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     slides.forEach(item => item.style.display = 'none');
//     slides[slideIndex - 1].style.display = 'block';
// }

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// prev.addEventListener('click', () => {
//     plusSlides(-1);
// });
// next.addEventListener('click', () => {
//     plusSlides(1);
// });

const hamburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

