import React from "react";
import { LargeButton } from "../../../../components/buttons/buttons";
import { Div } from "../configStyles";

function SchoolDetails({ handleSwitch, defaultDetail }) {
  const schoolbadge = localStorage.getItem("school-badge");
  const [schoolDetails, setSchoolDetails] = React.useState(
    JSON.parse(localStorage.getItem("school-details")) || defaultDetail
  );

  return (
    <Div className="card">
      <div className="card-header">
        <div className="row ">
          <div className="col-6 d-flex ">
            {" "}
            <p className="mb-0 mt-4">{schoolDetails.schoolName}</p>
            <div className="demo-inline-spacing ms-2">
              <span className="badge rounded-pill bg-label-success text-gray text-muted">
                Active <i className="bx bx-dots-vertical-rounded" />
              </span>
            </div>
          </div>
          <div className="col-lg-6 ">
            <LargeButton
              className="btn btn-primary float-end"
              name="schoolDetails"
              onClick={(e) => handleSwitch(e)}
            >
              Edit School
            </LargeButton>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="top rounded mt-2 bg-light-grey p-2">
          <div className="m-auto row m-4">
            <div className="col-lg-8 d-flex">
              <img
                src={
                  schoolbadge ? schoolbadge : "../assets/img/school-logo-2.png"
                }
                alt="school-logo"
                className="school-badge"
              />
              <div className="m-2 w-50">
                <p className="fw-bold">{schoolDetails.schoolName}</p>
                <p className="fw-normal fs-6 mt-2">Elementary School</p>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <p className="fw-normal fs-6 mb-0">
                <i className="text-primary bx bx-home-alt-2" />{" "}
                {schoolDetails.address}
              </p>
              <p className="fw-normal fs-6 mb-0">
                <i className="text-primary bx bx-phone"></i> +234
                {schoolDetails.mobileNumber}
              </p>
              <p className="fw-normal fs-6 mb-0">
                <i className="text-primary bx bx-mobile"></i> +23490X XXX XXXX
              </p>
              <p className="fw-normal fs-6 mb-0">
                <i className="text-primary bx bx-envelope"></i>{" "}
                {schoolDetails.email}
              </p>
            </div>
          </div>
        </div>
        <div className=" d-flex mt-2">
          <div className="p-2 border border-1 text-center rounded mx-2">
            <p className="mb-0">
              <span className="text-primary">25</span> classrooms
            </p>
          </div>
          <div className="p-2 border border-1 text-center rounded mx-2">
            <p className="mb-0">
              <span className="text-primary">25</span> Active Student
            </p>
          </div>
          <div className="p-2 border border-1 text-center rounded mx-2">
            <p className="mb-0">
              <span className="text-primary">25</span> Student Capacity
            </p>
          </div>
          <div className="p-2 border border-1 text-center rounded mx-2">
            <p className="mb-0">
              <span className="text-primary">25</span> Teachers
            </p>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default SchoolDetails;
