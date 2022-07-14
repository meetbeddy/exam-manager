import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 0 20px;
  overflow: hidden;
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

  width: 20%;
  text-align: center;
  .menu {
    display: flex;
    flex-direction: column;
    margin: 120px 0px 0px 0px;
    list-style-type: none;
  }
`;
