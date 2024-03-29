import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import init from "./init";
import { fetchschooldetails } from "../store/actions/adminActions";
import { useDispatch } from "react-redux";

function Index(props) {
  React.useEffect(() => {
    init();
  }, []);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchschooldetails());
  }, [dispatch]);

  const toggleCollapse = (e) => {
    e.preventDefault();
    window.Helpers.toggleCollapsed(true);
  };
  return (
    <div className="layout-wrapper layout-content-navbar layout-without-menu">
      <div className="layout-container">
        {/* */}
        <div className="layout-page">
          <Header toggleCollapse={toggleCollapse} />
          <SideNav toggleCollapse={toggleCollapse} />
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              {props.children}
              <Outlet />
            </div>
          </div>
          <div className="content-backdrop fade"></div>
        </div>
      </div>
      <div className="layout-overlay" onClick={(e) => toggleCollapse(e)}></div>
    </div>
  );
}

export default Index;
