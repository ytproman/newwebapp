const getSignal = document.getElementById("get-signal");
const getSignalTwo = document.getElementById("get-signal-two");
const printSignal = document.getElementById("print-signal");

// Твой массив коэффициентов
const coefficients = [
    1.01, 1.03, 1.06, 1.10, 1.15, 1.19, 1.24, 1.30, 1.35, 1.42, 
    1.48, 1.56, 1.65, 1.75, 1.85, 1.98, 2.12, 2.28, 2.47, 2.70, 
    2.96, 3.28, 3.70, 4.11, 4.64, 5.39, 6.50, 8.36, 12.08, 23.24
];

getSignal.onclick = function () {
    // 1. Анимация нажатия и "загрузка"
    getSignal.disabled = true;
    printSignal.innerHTML = "<span>WAIT...</span>";

    setTimeout(() => {
        // 2. Выбор рандомного коэф из массива
        const randomValue = coefficients[Math.floor(Math.random() * coefficients.length)];
        
        // 3. Вывод результата
        printSignal.innerHTML = randomValue + "x";
        
        // 4. Переключение кнопок
        getSignal.classList.add("deactivate");
        getSignalTwo.classList.remove("deactivate");
        getSignal.disabled = false;
    }, 800); // Задержка 0.8 сек для эффекта
};

getSignalTwo.onclick = function () {
    // Просто сбрасываем и имитируем новый клик
    getSignalTwo.classList.add("deactivate");
    getSignal.classList.remove("deactivate");
    getSignal.click();
};