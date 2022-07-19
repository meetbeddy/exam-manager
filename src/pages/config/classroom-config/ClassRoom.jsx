import React from "react";
import { LargeButton } from "../../../components/buttons/buttons";
import { Div } from "../configStyles";

function ClassRoom({ handleSwitch }) {
  const classDetails = JSON.parse(localStorage.getItem("class-details"));

  return (
    <Div className="card">
      <div className="card-header">
        <div className="row ">
          <div className="col-lg-6">
            <h4 className="mt-4">Classroom</h4>
          </div>
          <div className="col-lg-6 ">
            <LargeButton
              className="btn btn-warning float-end"
              color="#F2994A"
              name="classroom"
              onClick={(e) => handleSwitch(e)}
            >
              Edit Class
            </LargeButton>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive text-nowrap col-lg-12">
          <table className="table">
            <thead className="table-light-gray">
              <tr>
                <th colSpan="1">Class Name</th>
                <th colSpan="2">Sections</th>
                <th>Total Capacity</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {classDetails.map((detail) => {
                return (
                  <tr>
                    <td colSpan="1">{detail.className}</td>
                    <td colSpan="2">{detail.section.join(",")}</td>
                    <td colspan="1">
                      <div>{detail.capacity}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Div>
  );
}

export default ClassRoom;
