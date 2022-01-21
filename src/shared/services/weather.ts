type WeatherProps = {
  lat?: number;
  lon?: number;
};

export default async function fetchWeatherData({ lat, lon }: WeatherProps) {
  const appId = process.env.REACT_APP_ID_APP;

  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=${appId}`
  )
    .then((response) => response.json())
    .then((data) => data);
}
