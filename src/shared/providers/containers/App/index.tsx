import { useEffect } from "react";

import GlobalStyle from "shared/styles/GlobalStyle";
import fetchWeatherData from "shared/services/weather-api";

import Widget from "shared/components/molecules/Widget";

import { Container } from "./styles";

function App() {
  async function test() {
    const data = await fetchWeatherData();
    return data;
  }

  useEffect(() => {
    test();
    window.navigator.geolocation.getCurrentPosition(console.log, console.log);
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Widget />
    </Container>
  );
}

export default App;
