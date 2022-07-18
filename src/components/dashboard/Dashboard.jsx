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
        <div className="main-content">
          {props.children}

          <p className="footer">
            Powered By{" "}
            <span>
              <a href="#educenty">Educenty</a>
            </span>
          </p>
        </div>
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
