import { CgSun } from "react-icons/cg";
import { BsDroplet } from "react-icons/bs";
import { WiStrongWind } from "react-icons/wi";

import sun from "shared/assets/icons/sun.svg";
/* import rain from "shared/assets/icons/sun-rain.svg"; */
import { Container, Header, Content, Footer, InfoPercent } from "./styles";

export default function Widget() {
  return (
    <Container>
      <Header>
        <label>Dubai</label>
        <span>10:15</span>
      </Header>

      <Content>
        <img alt="sun" src={sun} />
        <label>Sunny</label>
      </Content>

      <Footer>
        <div>
          <span>
            <WiStrongWind />
            11 km/h
          </span>
          <span>
            <BsDroplet />
            95%
          </span>
          <span>
            <CgSun />
            1.5h
          </span>
        </div>

        <InfoPercent>48°</InfoPercent>
      </Footer>
    </Container>
  );
}
