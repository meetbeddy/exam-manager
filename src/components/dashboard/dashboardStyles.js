import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 0 20px;
  // overflow: hidden;
  .main-layout {
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    align-items: stretch;

    .main-content {
      width: 80%;

      position: relative;
      .footer {
        position: absolute;
        height: 18px;
        top: 96%;
        left: 86%;
        right: 0;
        bottom: 100;

        font-family: Roboto;
        font-size: 15px;
        font-style: italic;
        font-weight: 300;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

        span {
          font-weight: 600;

          a {
            color: inherit;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const AsideContainer = styled.div`
  display: flex;
  width: 20%;
  text-align: center;
  .menu {
    display: flex;
    flex-direction: column;
    margin: 120px 0px 0px 0px;
    list-style-type: none;
  }
`;
