import styled from "styled-components";

export const Container = styled.div`
  height: 350px;
  width: 352px;
  border-radius: 60px;
  background: #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: absolute;
  bottom: 80px;

  p,
  h2,
  a,
  input {
    font-family: "Lato";
  }

  h2 {
    font-size: 20px;
    line-height: 22px;
    color: #353535;
    font-family: "Source Code Pro", monospace;
  }

  p {
    color: var(--grey-text);
    font-weight: 500;
    font-size: 10px;
  }

  &,
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  form {
    height: 70%;

    input {
      height: 40px;
      width: 255px;
      border-radius: 60px;
      padding-left: 23px;
      font-size: 15px;
    }
  }

  span {
    width: 70%;
    text-align: right;
    a {
      color: var(--red);
      font-weight: 400;
      font-size: 10px;
    }
  }

  @media (min-width: 768px) {
    height: 617px;
    width: 522px;

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }

    form {
      input {
        height: 71px;
        width: 450px;
        font-size: 20px;
      }
    }

    span {
      a {
        font-size: 15px;
      }
    }
  }

  @media (min-width: 1100px) { 
    right: 350px;
    bottom: 180px;
  }
`;
