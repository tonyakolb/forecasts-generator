/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
const forecastButton = document.querySelector('.forecast-btn');
const containerForecasts = document.querySelector('.forecasts');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastText = document.querySelector('.current-forecast p');
const forecastTemplate = document.querySelector('#forecast-item');

function percentageProbability(min, max) {
    const percent = (Math.random() * (max - min)) + min;
    return +percent.toFixed();
}

function makeCardByTemplate(title, text) {
    const myForecast = forecastTemplate.content.cloneNode(true);

    myForecast.querySelector('h3').textContent = title;
    myForecast.querySelector('p').textContent = text;

    containerForecasts.prepend(myForecast);
}

function generatePrediction() {
    const predictionNumber = percentageProbability(1, 6);
    let predictionText = "";

    if (predictionNumber == 1) {
        predictionText = "Исполнятся все мечты!";
    } else if (predictionNumber == 2) {
        predictionText = "Все будет еще лучше!";
    } else if (predictionNumber == 3) {
        predictionText = "Everything will be alright!";
    } else if (predictionNumber == 4) {
        predictionText = "Happy New Year!";
    } else {
        predictionText = "На WB отменят все комиссии";
    }

    return predictionText;
}

function addPrediction() {
    const title = currentForecastTitle.textContent;
    const probability = currentForecastText.textContent;

    if (!title && !probability) {
        currentForecastTitle.textContent = generatePrediction();
        currentForecastText.textContent = `Вероятность ${percentageProbability(1, 100)}%`;
    }

    makeCardByTemplate(currentForecastTitle.textContent, currentForecastText.textContent);
    currentForecastTitle.textContent = generatePrediction();
    currentForecastText.textContent = `Вероятность ${percentageProbability(1, 100)}%`;
}

forecastButton.addEventListener('click', addPrediction);