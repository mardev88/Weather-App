const showWeatherBtn = document.getElementById("show-weather");
const showForecastBtn = document.getElementById("show-forecast");
const cityInput = document.getElementById("city");
const weatherContainer = document.getElementById("weather-container");
const forecastContainer = document.getElementById("forecast-container");

showWeatherBtn.addEventListener("click", showWeather);
showForecastBtn.addEventListener("click", showForecast);

const URL_CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

const URL_FORECAST_WEATHER =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

async function showWeather() {
  const city = cityInput.value;
  const response = await fetch(`${URL_CURRENT_WEATHER}${city}`);
  const weather = await response.json();

  const iconCode = weather.weather[0].icon;
  const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  weatherContainer.innerHTML = `
      <div class="weather-card">
         <img src=${iconImageUrl} />
         <p>Descriere: ${weather.weather[0].description}</p>
         <p>Umiditate: ${weather.main.humidity}% </p>
         <p>Presiune: ${weather.main.pressure} Hg</p>
         <p>Temperatura curenta: ${weather.main.temp}°C</p>
         <p>Maxima zilei: ${weather.main.temp_max}°C </p>
         <p>Minima zilei: ${weather.main.temp_min}°C </p>
      </div>
   `;
}
