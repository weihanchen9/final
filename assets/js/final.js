/*滑鼠移動到商品會有陰影、可以點擊商品跳轉頁面*/
document.addEventListener('DOMContentLoaded', function() {
    var productItems = document.querySelectorAll('.product-item');
  
    for (var i = 0; i < productItems.length; i++) {
      productItems[i].addEventListener('mouseover', function() {
        this.classList.add('highlight');
      });
  
      productItems[i].addEventListener('mouseout', function() {
        this.classList.remove('highlight');
      });
  
      productItems[i].addEventListener('click', function() {
        var link = this.dataset.link;
        if (link) {
          window.location.href = 'subpage/' + link;
        }
      });
    }
  });

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
  
/*好吃的、好喝的、寵物食品，製作循環滑動*/
document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".product-container");

  containers.forEach(function (container) {
      const row = container.querySelector(".product-row");
      const prevBtn = container.querySelector(".prev");
      const nextBtn = container.querySelector(".next");
      const itemWidth = row.querySelector(".product-item").offsetWidth;
      let translateX = 0;
  
      nextBtn.addEventListener("click", function () {
          if (translateX > -(row.scrollWidth - container.offsetWidth)) {
              translateX -= itemWidth;
              row.style.transform = `translateX(${translateX}px)`;
          } else {
              translateX = 0;
              row.style.transform = `translateX(${translateX}px)`;
          }
      });
  
      prevBtn.addEventListener("click", function () {
          if (translateX < 0) {
              translateX += itemWidth;
              row.style.transform = `translateX(${translateX}px)`;
          } else {
              translateX = -(row.scrollWidth - container.offsetWidth);
              row.style.transform = `translateX(${translateX}px)`;
          }
      });
  });
});