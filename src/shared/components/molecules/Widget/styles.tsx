import styled from "styled-components";

export const Container = styled.div`
  width: 308px;

  border: 1px solid #434343;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);

  color: #fff;

  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    transition: 0.5s all;
    margin-top: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;

  label {
    padding: 0.2rem 0.9rem;
    border-radius: 3px;
    background-color: #222;
    border: 1px solid #434343;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-direction: column;

  margin-bottom: 2rem;

  label {
    text-transform: capitalize;
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 0.6rem;
    flex-direction: column;

    span {
      display: flex;
      gap: 0.8rem;
    }
  }
`;

export const InfoPercent = styled.span`
  font-size: 4.5rem;
`;
