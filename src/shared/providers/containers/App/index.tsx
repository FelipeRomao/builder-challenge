import "react-toastify/dist/ReactToastify.css";
import "moment/locale/pt-br";
import { ToastContainer } from "react-toastify";
import { MdRefresh } from "react-icons/md";

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

        <Action
          size="large"
          variant="contained"
          endIcon={<MdRefresh />}
          onClick={() => window.location.reload()}
        >
          Atualizar dados climáticos
        </Action>
      </WeatherProvider>
    </Container>
  );
}

export default App;
