import React from "react";

function SecondaryNav({ children }) {
  return (
    <div className="bg-transparent mb-2 w-100">
      <div className=" my-2 d-flex  align-items-center ">{children}</div>
    </div>
  );
}

export default SecondaryNav;
