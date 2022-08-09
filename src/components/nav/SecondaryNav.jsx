import React from "react";

function SecondaryNav({ children }) {
  return (
    <nav className="navbar navbar-example navbar-expand-lg navbar-light bg-transparent mb-3 align-items-center">
      <div className=" my-2 d-flex  align-items-center">{children}</div>
    </nav>
  );
}

export default SecondaryNav;
