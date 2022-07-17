import React from "react";
import { Button } from "react-bootstrap";
import { LargeButton } from "../buttons/buttons";

import { Nav } from "./NavStyles";

function NavBar() {
  return (
    <Nav>
      <div className="nav-container d-flex justify-content-between">
        <div className="logo">
          <img src="../assets/img/school-logo.png" alt="school-logo" />
        </div>
        <div className="name-tag ">
          <p>
            <span className="bold">Welcome</span> Olamide Ogundele
          </p>
        </div>
        <div className="nav-button">
          <LargeButton className="btn" color="#CE4040">
            sign out
          </LargeButton>
        </div>
      </div>
    </Nav>
  );
}

export default NavBar;
