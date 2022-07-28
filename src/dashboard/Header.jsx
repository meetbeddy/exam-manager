import React from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import decode from "jwt-decode";
import { ToggleIcon } from "../components/icons/icons";

function Header(props) {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();

  // const logout = () => {
  //   dispatch({ type: "LOGOUT" });

  //   history("/login");

  //   setUser(null);
  // };

  // const profile = user?.result;
  // React.useEffect(() => {
  //   const token = user?.token;

  //   if (token) {
  //     const decodedToken = decode(token);
  //     console.log(decodedToken.exp * 1000 < new Date().getTime());
  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }
  //   if (!token) history("/login");
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [history, location, logout, user?.token]);

  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl  navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <button className="p-1  m-3 border-0 rounded">
        <ToggleIcon />
      </button>
      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        {/* Search */}
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0" />
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        {/* /Search */}
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* Place this tag where you want the button to render. */}
          <li className="nav-item lh-1 me-3">
            <a
              className="github-button"
              href="https://github.com/themeselection/sneat-html-admin-template-free"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
            >
              Star
            </a>
          </li>
          {/* User */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a
              className="nav-link dropdown-toggle hide-arrow"
              href="javascript:void(0);"
              data-bs-toggle="dropdown"
            >
              <div className="avatar avatar-online">
                <img
                  src="../assets/img/avatars/1.png"
                  alt
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img
                          src="../assets/img/avatars/1.png"
                          alt
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">John Doe</span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user me-2" />
                  <span className="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-cog me-2" />
                  <span className="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="d-flex align-items-center align-middle">
                    <i className="flex-shrink-0 bx bx-credit-card me-2" />
                    <span className="flex-grow-1 align-middle">Billing</span>
                    <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                      4
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="auth-login-basic.html">
                  <i className="bx bx-power-off me-2" />
                  <span className="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
          {/*/ User */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
