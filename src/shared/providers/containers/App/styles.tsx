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

export const Action = styled.div`
  width: 260px;
  cursor: pointer;

  background-image: linear-gradient(
    to right,
    #304352 0%,
    #303030 51%,
    #304352 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
