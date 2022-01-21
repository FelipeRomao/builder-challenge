import { CgSun } from "react-icons/cg";
import { BsDroplet } from "react-icons/bs";
import { WiStrongWind } from "react-icons/wi";
import Skeleton from "@mui/material/Skeleton";
import moment from "moment";

import {
  Action,
  Header,
  Content,
  Footer,
  Container,
  InfoPercent,
} from "./styles";
import { useContext } from "react";
import WeatherContext from "modules/Weather/context";

export default function Widget() {
  const { loader, results, onError, onGetWeatherSuccess } =
    useContext(WeatherContext);

  const { name, weather, wind, main } = results;

  return (
    <>
      <Container>
        {loader ? (
          <Skeleton
            width={308}
            height={365}
            animation="wave"
            variant="rectangular"
          />
        ) : (
          <>
            <Header>
              <label>{name}</label>
              <span>{moment().format("LT")}</span>
            </Header>

            <Content>
              <img
                alt="sun"
                src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@4x.png`}
              />
              <label>{weather[0]?.description}</label>
            </Content>

            <Footer>
              <div>
                <span>
                  <WiStrongWind />
                  {wind?.speed} km/h
                </span>
                <span>
                  <BsDroplet />
                  {main?.humidity}%
                </span>
                <span>
                  <CgSun />
                  {main?.feels_like.toString().split(".")[0]}°
                </span>
              </div>

              <InfoPercent>{main?.temp.toString().split(".")[0]}°</InfoPercent>
            </Footer>
          </>
        )}
      </Container>

      <Action
        onClick={() =>
          window.navigator.geolocation.getCurrentPosition(
            onGetWeatherSuccess,
            onError
          )
        }
      >
        Atualizar dados
      </Action>
    </>
  );
}
