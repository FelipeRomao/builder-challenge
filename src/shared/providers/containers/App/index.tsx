import "react-toastify/dist/ReactToastify.css";
import "moment/locale/pt-br";
import { ToastContainer } from "react-toastify";

import GlobalStyle from "shared/styles/GlobalStyle";
import Widget from "shared/components/molecules/Widget";

import { Container } from "./styles";
import { WeatherProvider } from "modules/Weather/context";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ToastContainer />
      <WeatherProvider>
        <Widget />
      </WeatherProvider>
    </Container>
  );
}

export default App;
