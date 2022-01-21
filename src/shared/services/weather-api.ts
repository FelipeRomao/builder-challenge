type WeatherProps = {
  lat?: number;
  lon?: number;
};

export default async function fetchWeatherData({ lat, lon }: WeatherProps) {
  const appId = "90274f6907ae77932c3f03c5a6b76b4d";

  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${appId}`
  )
    .then((response) => response.json())
    .then((data) => data);
}
