import Button from "@mui/material/Button";
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  height: 80vh;

  gap: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Action = styled(Button)`
  width: 345px;
  background-color: #323232 !important;
`;
