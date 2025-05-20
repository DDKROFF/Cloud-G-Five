//Прикольные фишки//

document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.setAttribute('loading', 'lazy');
});

//Все что связанно с якорными ссылками//

//Якорная ссылка внутри страницы

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            //Обновление URL без дерга
            history.pushState(null, null, this.getAttribute('href'));
        }
    });
});

//Стрелка к вверху//

document.getElementById('to__header').addEventListener('click', function () {
    const target = document.getElementById('header');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        //Удвления якоря в пути
        setTimeout(function () {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }, 500);
    }
});

// Модальное окно входа //

const btn = document.getElementById ('modalOpen');
const body = document.body;
const modal = document.querySelector ('.modal__window');
const modalCloseBtn = document.querySelector ('.modal__btn');

btn.addEventListener ('click', function() {
    body.classList.add ('active');
    modal.classList.add ('active');
});

modalCloseBtn.addEventListener ('click', function() {
    body.classList.remove ('active');
    modal.classList.remove ('active');
});

document.addEventListener ('keydown', function(event) {
    if (event.key === 'Escape') {
    body.classList.remove ('active');
    modal.classList.remove ('active');
    modalReg.classList.remove ('active');
    }
})

// Окно регистрации//

const regBtn = document.getElementById ('reg-modal');
const regModal = document.querySelector ('.reg__window');
const closeBtn = document.querySelector ('.close__btn');
const confirmReg = document.getElementById ('confirm-reg');

regBtn.addEventListener ('click', function() {
    modal.classList.remove ('active');
    regModal.classList.add ('active');
});

closeBtn.addEventListener ('click', function() {
    body.classList.remove ('active');
    regModal.classList.remove ('active');
});

confirmReg.addEventListener ('click', function () {
    body.classList.remove ('active');
    regModal.classList.remove ('active');
})

// Отправка формы в никуда //

const form = document.getElementById('myForm');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch('/your-server-endpoint', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Ошибка сети');
      alert('Форма успешно отправлена!');

      form.reset();

    } catch (error) {
      alert('Ошибка при отправке формы: ' + error.message);
    }
  });