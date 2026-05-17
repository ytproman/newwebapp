        const predictBtn = document.getElementById('predictBtn');
        const multiplierDisplay = document.getElementById('multiplier');
        const scanner = document.getElementById('scanner');

        // Переменная для отслеживания состояния кулдауна
        let isCooldown = false;

        function generateSignal() {
            // Если сейчас активна блокировка, прерываем функцию
            if (isCooldown) return;

            // Блокируем кнопку на время анализа
            isCooldown = true;
            predictBtn.disabled = true;
            predictBtn.innerText = "АНАЛИЗ АЛГОРИТМА...";
            
            // Запускаем визуальную анимацию сканера
            multiplierDisplay.style.opacity = '0.3';
            scanner.style.display = 'block';
            multiplierDisplay.innerText = "---";

            setTimeout(() => {
                let rand = Math.random();
                let result;
                
                if (rand < 0.25) { 
                    result = (Math.random() * (1.99 - 1.00) + 1.00).toFixed(2);
                } else if (rand < 0.75) { 
                    result = (Math.random() * (4.00 - 2.00) + 2.00).toFixed(2);
                } else if (rand < 0.90) { 
                    result = (Math.random() * (10.00 - 4.01) + 4.01).toFixed(2);
                } else { 
                    result = (Math.random() * (20.00 - 10.01) + 10.01).toFixed(2);
                }

                // Показываем результат
                scanner.style.display = 'none';
                multiplierDisplay.style.opacity = '1';
                
                // Меняем цвета в зависимости от размера коэффициента
                if (result >= 10.00) {
                    multiplierDisplay.style.color = "#ff0055"; // Розово-красный для огромных иксов
                    multiplierDisplay.style.textShadow = "0 0 20px #ff0055";
                } else if (result >= 4.00) {
                    multiplierDisplay.style.color = "#ffc300"; // Золотой для высоких
                    multiplierDisplay.style.textShadow = "0 0 20px #ffc300";
                } else if (result >= 2.00) {
                    multiplierDisplay.style.color = "#a67cff"; // Фиолетовый для частых (2-4)
                    multiplierDisplay.style.textShadow = "0 0 20px #a67cff";
                } else {
                    multiplierDisplay.style.color = "#ffffff"; // Белый для мелких (до 2)
                    multiplierDisplay.style.textShadow = "0 0 20px #944ef5";
                }

                multiplierDisplay.innerText = `x${result}`;
                
                // Запускаем таймер кулдауна на 30 секунд
                let secondsLeft = 30;
                predictBtn.innerText = `ОЖИДАЙТЕ ${secondsLeft} СЕК...`;
                
                const countdown = setInterval(() => {
                    secondsLeft--;
                    predictBtn.innerText = `ОЖИДАЙТЕ ${secondsLeft} СЕК...`;
                    
                    if (secondsLeft <= 0) {
                        clearInterval(countdown);
                        isCooldown = false;
                        predictBtn.disabled = false;
                        predictBtn.innerText = "ПОЛУЧИТЬ СИГНАЛ";
                    }
                }, 1000);

            }, 1500); // Окончание искусственной паузы "анализа"
        }

        // Привязываем функцию к кнопке
        predictBtn.addEventListener('click', generateSignal);