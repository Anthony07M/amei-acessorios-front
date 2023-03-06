import styled from "styled-components";

export const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    width: 20vw;
    height: 100vh;
    background: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      font-family: "Lato";
      color: var(--white);
      padding: 15px;
    }

    a:hover {
      background: #363636;
    }

    .header-menu {
      display: flex;
      flex-direction: column;

      h2 {
        color: var(--red);
        font-family: "Source Code Pro", monospace;
        font-size: 1.55rem;
        padding-left: 15px;
        height: 60px;
      }
    }
  }
`;
