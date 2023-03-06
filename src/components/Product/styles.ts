import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media (min-width: 995px) {
    border: 1px solid var(--grey-text);
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    width: 660px;
    height: 80px;

    p {
      width: 110px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Lato";
      color: var(--grey-text);
    }

    p:nth-child(2), p:nth-child(4) {
      font-weight: bold;
    }
    p:last-child {
      color: red;
    }
  }
`;
