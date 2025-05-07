document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const container = document.querySelector('.slider__container');
  const slideWidth = 342.33;
  let offset = 0;
  const speed = 0.7;
  const slides = slider.querySelectorAll('a');
  for (let i = 0; i < 2; i++) {
    const clone = slides[i].cloneNode(true);
    slider.appendChild(clone);
  }

  function animate() {
    offset += speed;

    if (offset >= slideWidth) {
      offset -= slideWidth;
      const firstSlide = slider.querySelector('a');
      slider.appendChild(firstSlide);
    }

    slider.style.transform = `translateX(${-offset}px)`;
    requestAnimationFrame(animate);
  }

  //Для адаптивности слайдера
  function updateContainerWidth() {
    const maxWidth = 1830;
    const sidePadding = 80;
    const availableWidth = Math.min(window.innerWidth, maxWidth + sidePadding) - sidePadding;
    container.style.maxWidth = `${availableWidth}px`;
  }

  window.addEventListener('resize', updateContainerWidth);
  updateContainerWidth();

  animate();
});