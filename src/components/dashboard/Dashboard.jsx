import React from "react";
import NavBar from "../header/NavBar";
import Aside from "../sidenav/Aside";
import { DashboardContainer } from "./dashboardStyles";

function Dashboard(props) {
  return (
    <DashboardContainer>
      <NavBar />
      <div className="main-layout">
        <Aside />
        <div className="main-content">{props.children}</div>
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
