import styled from "styled-components";

export const Nav = styled.div`
  position: relative;
  height: 162.58px;
  width: 100%;
  background: #ebe9f1;

  .nav-container {
    width: 95%;
    height: 162.58px;
    margin: 0 25px 0;
    box-sizing: border-box;
  }

  .logo {
    border-radius: 154px;
    margin: auto 0;
    img {
      width: 108.69px;
      height: 104.64px;
    }
  }

  .name-tag {
    margin: auto 0;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 300;
      font-size: 35px;
      line-height: 41px;
      color: black;
      span {
        font-weight: 700;
      }
    }
  }

  .nav-button {
    margin: auto 0;
  }
`;
