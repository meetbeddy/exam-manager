import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 px;
  .main-layout {
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    align-items: stretch;

    .main-content {
      width: 80%;
    }
  }
`;

export const AsideContainer = styled.div`
  display: flex;
  width: 25%;
  text-align: center;
  .menu {
    margin: 120px 0px 0px 0px;
    list-style-type: none;
  }
`;
