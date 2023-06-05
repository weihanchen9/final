/*廣告動畫製作*/
document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.querySelector('.ad-slideshow');
    const slides = document.querySelectorAll('.ad-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let slideIndex = 0;
    const slideWidth = 800;
    let autoSlideInterval;

    function showSlide(index) {
    const slidePosition = -slideWidth * index;
    slideshow.style.transform = `translateX(${slidePosition}px)`;
    }

    function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
    resetAutoSlideInterval();
    }

    function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
    resetAutoSlideInterval();
    }

    function resetAutoSlideInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    resetAutoSlideInterval();
    
});