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
  