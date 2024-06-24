 // Функция для расчета и обновления времени с момента 16:00 16.11.2020
 function updateTimeSinceTargetDate() {
    // Указываем целевую дату и время (16:00 16.11.2020)
    const targetDate = new Date('2020-11-16T16:00:00Z');

    // Функция для форматирования числа с добавлением ведущего нуля (если нужно)
    function formatNumber(number) {
        return number < 10 ? `0${number}` : `${number}`;
    }

    // Функция для обновления времени
    function updateClock() {
        const currentDate = new Date();
        const difference = currentDate.getTime() - targetDate.getTime();

        // Вычисляем разницу в секундах, минутах, часах и днях
        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        // Формируем текст для отображения
        const timeSinceText = `
                <div class="time-block">Years: ${years}</div>
                <div class="time-block">Months: ${months % 12}</div>
                <div class="time-block">Days: ${days % 30}</div>
                <div class="time-block">Hours: ${formatNumber(hours % 24)}</div>
                <div class="time-block">Minutes: ${formatNumber(minutes % 60)}</div>
                <div class="time-block">Seconds: ${formatNumber(seconds % 60)}</div>
        `;

        // Выводим результат на страницу
        document.getElementById('timeSince').innerHTML = timeSinceText;
    }

    // Вызываем функцию для первоначальной установки времени
    updateClock();

    // Устанавливаем интервал для обновления времени каждую секунду (1000 миллисекунд)
    setInterval(updateClock, 1000);
}

// Вызываем функцию при загрузке страницы
updateTimeSinceTargetDate();