import React from "react";
import { LargeButton } from "../../../../components/buttons/buttons";
import { Div } from "../configStyles";

function ClassRoom({ handleSwitch, configs }) {
  const classDetails = configs?.classes;

  return (
    <Div className="mt-4">
      <div className="card-header">
        <div className="row ">
          <div className="col-lg-6">
            <h4 className="mt-4">Classroom</h4>
          </div>
          <div className="col-lg-6 ">
            <LargeButton
              className="btn btn-primary float-end"
              name="classroom"
              onClick={(e) => handleSwitch("classroom")}
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
                <th>Class Name</th>

                <th>Section</th>
                <th>Capacity</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {classDetails?.map((detail, i) => {
                return (
                  <tr key={i}>
                    <td>{detail?.level + detail?.number}</td>
                    <td>{detail?.denomination}</td>
                    <td>
                      <div>{detail?.capacity}</div>
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
