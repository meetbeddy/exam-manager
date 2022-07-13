import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "./NavStyles";

function NavBar() {
  return (
    <Nav>
      <div className="nav-container">
        <div className="logo ">
          <img src="../assets/img/school-logo.png" alt="school-logo" />
        </div>
        <div className="name-tag">
          <p>
            <span className="bold">Welcome</span> Olamide Ogundele
          </p>
        </div>
        <div className="nav-button">
          <Button variant="danger">sign out</Button>
        </div>
      </div>
    </Nav>
  );
}

export default NavBar;
