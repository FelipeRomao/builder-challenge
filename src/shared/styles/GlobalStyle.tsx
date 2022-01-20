import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin:0;
  padding: 0;
  font-family: Inter, sans-serif;
}

html,
body {
  background-color:#fafafa;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}



`;

export default GlobalStyle;
