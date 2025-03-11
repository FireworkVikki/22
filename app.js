// Функция для управления слайдами
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    // Устанавливаем начальный активный слайд
    slides[activeSlide].classList.add('active');

    // Обрабатываем клики по каждому слайду
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();         // Очистка активных классов перед активацией нового слайда
            slide.classList.add('active'); // Делаем слайд активным
        });
    }

    // Функция для удаления активного класса со всех слайдов
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

// Запускаем плагин слайдеров, начиная с первого слайда (индекс 0)
slidesPlugin(0);
