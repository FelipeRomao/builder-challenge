import "react-toastify/dist/ReactToastify.css";
import "moment/locale/pt-br";
import { ToastContainer } from "react-toastify";

import GlobalStyle from "shared/styles/GlobalStyle";
import Widget from "shared/components/molecules/Widget";

import { Container, Action } from "./styles";
import { WeatherProvider } from "modules/Weather/context";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ToastContainer />
      <WeatherProvider>
        <Widget />

        <Action onClick={() => window.location.reload()}>
          Atualizar dados
        </Action>
      </WeatherProvider>
    </Container>
  );
}

export default App;
