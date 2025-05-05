//Прикольные фишки//

document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
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