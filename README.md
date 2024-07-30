# Weather App

This Weather App allows users to view the current weather and a 5-day forecast for any city. The app retrieves live weather data and forecasts from the OpenWeatherMap API.

## Features

- Display current weather information for a specified city, including temperature, humidity, pressure, and weather description.
- Show a 5-day weather forecast, including temperature and weather description for each day.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/weather-app.git

2. Navigate to the project directory:
   ```sh
   cd weather-app

## Usage

1. Open index.html in your favorite web browser.
2. Enter the name of a city in the input field.
3. Click the "Show Weather" button to view the current weather and 5-day forecast.

## API

This app uses the OpenWeatherMap API to fetch weather data. You will need an API key to use this app.

## Code Overview

## `showWeather` Function
Fetches and displays the current weather for a specified city.

## `showForecast` Function
Fetches and displays the 5-day weather forecast for a specified city.

## `getForecasts` Function
Retrieves forecast data from the OpenWeatherMap API.

## `groupForecastsByDate` Function
Groups forecast data by date.

## `showForecastInContainer` Function
Renders grouped forecast data into HTML.

## `fromGroupedForecastsToCard` Function
Generates HTML for grouped forecasts.

## `fromForecastsToCard` Function
Generates HTML for individual forecast cards.

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Create a new Pull Request.

## Acknowledgements

OpenWeatherMap for providing the weather API.
All contributors and maintainers of this project.
