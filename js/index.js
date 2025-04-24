const swiper = new Swiper('.swiper', {

    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  new Swiper('.swiper', {
    Loop: true,
    slidesPerView: 1,
    spaceBetween: 0
});

window.addEventListener('orientationchange', () => {
  swiper.update();
  swiper.onResize();
});

//Отзыв через звезды//

const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = parseInt(star.getAttribute('data-value'));
    highlightStars(val);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating);
  });

  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    const starVal = parseInt(star.getAttribute('data-value'));
    if (starVal <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

