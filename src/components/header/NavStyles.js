import styled from "styled-components";

export const Nav = styled.div`
  position: relative;
  max-width: 100%;
  height: 162.58px;
  background: #ebe9f1;

  .nav-container {
    display: flex;
    flex-direction: row;
    width: auto;
    height: 162.58px;
    margin: 0;
    box-sizing: border-box;

    // text-align:center;
  }
  .logo {
    width: 20%;
    border-radius: 154px;
    margin: auto;
    img {
      width: 108.69px;
      height: 104.64px;
    }
  }
  .name-tag {
    width: 50%;
    margin: auto 0;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 300;
      font-size: 35px;
      line-height: 41px;
      span {
        font-weight: 700;
      }
    }
  }

  .nav-button {
    width: 20%;
    margin: auto;
  }
`;
