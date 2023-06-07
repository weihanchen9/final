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

    //const常數變數，不會變化
    const slideshow = document.querySelector('.ad-slideshow'); //這行程式碼選取了 .ad-slideshow CSS 類別的元素，並將其存儲在 slideshow 變數中。這個元素代表整個廣告輪播區域。
    const slides = document.querySelectorAll('.ad-slide'); //這行程式碼選取具有 .ad-slide CSS 類別的元素，並將它們存儲在 slides 變數中。這些元素代表廣告輪播中的每一張幻燈片。
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    let slideIndex = 0; //這是一個變數，用於追蹤當前顯示的幻燈片的索引。初始值為 0，表示顯示第一張幻燈片。
    const slideWidth = 800; //廣告寬度設成800px
    let autoSlideInterval; //這是一個變數，用於存儲自動輪播的間隔時間。
    
    
    function showSlide(index) {     //這是一個函式，接收一個索引值作為參數。它根據傳入的索引值計算幻燈片的位置，並將輪播區域的 transform 屬性設置為對應的位置，從而顯示該幻燈片。
      const slidePosition = -slideWidth * index;
      slideshow.style.transform = `translateX(${slidePosition}px)`;
    }
  
    function nextSlide() {  //這個 nextSlide() 函式是用於切換到下一張幻燈片的功能。
      slideIndex++;         
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
      resetAutoSlideInterval();
    }
  
    function prevSlide() {   //用於切換到上一張幻燈片。
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      showSlide(slideIndex);
      resetAutoSlideInterval();
    }
  
    function resetAutoSlideInterval() {  //重設自動輪播的間隔時間。它清除之前設置的間隔計時器（autoSlideInterval），並使用 setInterval 函式設置一個新的間隔計時器，每 5000 毫秒（5 秒）
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, 5000);
    }
  
    nextBtn.addEventListener('click', nextSlide); //這兩行程式碼將點擊事件監聽器附加到下一張和上一張按鈕上
    prevBtn.addEventListener('click', prevSlide);
  
    resetAutoSlideInterval(); //啟動自動輪播功能
  });
  
/*好吃的、好喝的、寵物食品，製作循環滑動*/
document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".product-container"); //container 是一個變數，代表一個元素。這個元素可以是網頁中的某個容器元素，例如 <div> 或其他 HTML 元素。

  containers.forEach(function (container) {
      const row = container.querySelector(".product-row");  //container.querySelector(".product-row") 是一個 DOM 方法，用於從 container 元素中選取第一個符合指定 CSS 選擇器（在這裡是 .product-row）的子元素。
      const prevBtn = container.querySelector(".prev");
      const nextBtn = container.querySelector(".next");
      const itemWidth = row.querySelector(".product-item").offsetWidth;
      let translateX = 0;
  
      nextBtn.addEventListener("click", function () {
          if (translateX > -(row.scrollWidth - container.offsetWidth)) {  //檢查 translateX 是否大於 -(row.scrollWidth - container.offsetWidth)。row.scrollWidth 是 .product-row 元素的實際寬度，而 container.offsetWidth 是容器元素的可見寬度。
              translateX -= itemWidth;
              row.style.transform = `translateX(${translateX}px)`;  //translateX 是一個變數，用於追蹤水平平移（位移）的數值。
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

          //總結來說，這段程式碼處理了點擊「下一個」和「上一個」按鈕時的滾動功能。透過計算 translateX 值的增減，並使用 row.style.transform 進行水平平移（位移），從而達到對 .product-row 元素的滾動控制。
      });
  });
});