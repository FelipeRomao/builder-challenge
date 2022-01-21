import styled from "styled-components";

export const Container = styled.button`
  width: 350px;
  cursor: pointer;

  background-image: linear-gradient(
    to right,
    #304352 0%,
    #303030 51%,
    #304352 100%
  );
  margin: 0px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  border: none;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
