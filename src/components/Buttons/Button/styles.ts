import styled from "styled-components";

export const Container = styled.button`
  height: 34px;
  width: 255px;
  border-radius: 60px;
  background: var(--black);
  color: var(--white);
  font-family: "Lato";
  font-weight: 400;
  font-size: 15px;

  @media (min-width: 834px) {
    height: 60px;
    width: 450px;
    font-size: 20px;
  }
`;
