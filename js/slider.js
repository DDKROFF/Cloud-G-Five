document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slider');
    let slides = container.querySelectorAll('img.slide');
    if (slides.length === 0) return;
  
    // Получаем ширину слайда с отступом
    const slideStyle = getComputedStyle(slides[0]);
    const slideWidth = slides[0].offsetWidth + parseInt(slideStyle.marginRight);
  
    let scrollPosition = 0;
  
    function slideNext() {
      scrollPosition += slideWidth;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  
      // Обновляем NodeList, т.к. он статичен
      slides = container.querySelectorAll('img.slide');
  
      if (scrollPosition >= slideWidth * (slides.length - 1)) {
        const firstSlide = slides[0];
        const clone = firstSlide.cloneNode(true);
        container.appendChild(clone);
  
        // Ждем завершения плавного скролла
        setTimeout(() => {
          scrollPosition -= slideWidth;
          container.scrollLeft = scrollPosition;
          container.removeChild(firstSlide);
        }, 500);
      }
    }
  
    setInterval(slideNext, 3000);
  });