import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  MenuReportIcon,
  MenuUserIcon,
  MenuClassIcon,
  MenuConfigIcon,
} from "../components/icons/icons";
import { schoolId } from "../store/api";

function SideNav(props) {
  // const [user, setUser] = React.useState(
  //   JSON.parse(localStorage.getItem("profile"))
  // );

  // const profile = user?.result;

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical  bg-menu-theme"
    >
      <div className="app-brand demo border-bottom px-1 mt-4">
        <RouterNavLink
          to="/dashboard"
          className="app-brand-link"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <div className="avatar flex-shrink-0 me-3">
            <span className="avatar-initial rounded bg-label-primary border">
              <img src="../assets/img/school-logo-2.png" alt="school-logo" />
            </span>
          </div>
          <div className="d-flex w-100 flex-wrap  align-items-center justify-content-between gap-2">
            <div className="me-0">
              <p className="m-0 fs-6">SCHOOL NAME</p>
              <small className="m-0 text-muted">school slogan</small>
            </div>
          </div>
        </RouterNavLink>
        <a
          href="false"
          className=" menu-link text-large ms-auto d-block d-xl-none"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li
          className="menu-item border-bottom m-0"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <RouterNavLink to="class" className="menu-link d-flex m-0 p-1">
            <div className="avatar flex-shrink-0 me-3">
              <span className="avatar-initial rounded bg-label-primary border">
                <MenuClassIcon />
              </span>
            </div>
            <div
              className="d-flex w-100 flex-wrap  align-items-center justify-content-between gap-2"
              // style={{ height: "56px" }}
            >
              <div className="me-0">
                <p className="m-0 fs-6">My Class</p>
                <small className="m-0 text-muted">
                  manage your classroom and students
                </small>
              </div>
            </div>
          </RouterNavLink>
        </li>
        <li
          className="menu-item border-bottom m-0"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <RouterNavLink to="users" className="menu-link d-flex m-0 p-1">
            <div className="avatar flex-shrink-0 me-3">
              <span className="avatar-initial rounded bg-label-primary border">
                <MenuUserIcon />
              </span>
            </div>
            <div
              className="d-flex w-100 flex-wrap  align-items-center justify-content-between gap-2"
              // style={{ height: "56px" }}
            >
              <div className="me-0">
                <p className="m-0 fs-6">Users</p>
                <small className="m-0 text-muted">
                  Edit, Add and manage users
                </small>
              </div>
            </div>
          </RouterNavLink>
        </li>
        <li
          className="menu-item border-bottom m-0"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <RouterNavLink to="reports" className="menu-link d-flex m-0 p-1">
            <div className="avatar flex-shrink-0 me-3">
              <span className="avatar-initial rounded bg-label-primary border">
                <MenuReportIcon />
              </span>
            </div>
            <div
              className="d-flex w-100 flex-wrap  align-items-center justify-content-between gap-2"
              // style={{ height: "56px" }}
            >
              <div className="me-0">
                <p className="m-0 fs-6">Reports</p>
                <small className="m-0 text-muted">
                  manage your classroom and students
                </small>
              </div>
            </div>
          </RouterNavLink>
        </li>
        <li
          className="menu-item border-bottom m-0"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <RouterNavLink to="config" className="menu-link d-flex m-0 p-1">
            <div className="avatar flex-shrink-0 me-3">
              <span className="avatar-initial rounded bg-label-primary border">
                <MenuConfigIcon />
              </span>
            </div>
            <div
              className="d-flex w-100 flex-wrap  align-items-center justify-content-between gap-2"
              // style={{ height: "56px" }}
            >
              <div className="me-0">
                <p className="m-0 fs-6">Config</p>
                <small className="m-0 text-muted">
                  manage major settings and dependencies
                </small>
              </div>
            </div>
          </RouterNavLink>
        </li>
        {/* Layouts */}
      </ul>
    </aside>
  );
}

export default SideNav;
