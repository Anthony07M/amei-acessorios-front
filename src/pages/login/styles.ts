import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Red = styled.div`
  height: 100%;
  width: 50%;
  background: var(--red);
  flex: 1;

  h1 {
    font-family: "Source Code Pro", monospace;
    font-size: 15px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0.17em;
    color: var(--white);
    width: 177px;
    height: 191px;
    padding-left: 20px;
  }

  @media (min-width: 768px) {
    h1 {
      width: 445px;
      height: 112px;
      padding-top: 20px;
      font-size: 20px;
    }
  }
  @media (min-width: 1050px) {
    h1 {
      display: none;
    }
  }
`;

export const Black = styled.div`
  height: 100%;
  width: 50%;
  background: var(--black);
  h1 {
    display: none;
  }
  div {
    text-align: right;
    padding: 30px;

    img {
      width: 134px;
      height: 58.91px;
    }
  }

  @media (min-width: 768px) {
    width: 40%;
    div {
      padding: 30px 50px 0 0;
      img {
        width: 201px;
        height: 88px;
      }
    }
  }

  @media (min-width: 1050px) {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
    }
    h1 {
      font-family: "Source Code Pro", monospace;
      width: 400px;
      text-align: left;
      height: 150px;
      left: 191px;
      top: 539px;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 50px;
      letter-spacing: 0.17em;
      color: #b0b0b0;
    }
  }
`;
