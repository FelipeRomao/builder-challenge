export default async function fetchWeatherData() {
  return await fetch("https://api.openweathermap.org/data/2.5/weather?q=London")
    .then((response) => response.json())
    .then((data) => data);
}
