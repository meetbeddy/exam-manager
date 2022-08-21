import React from "react";
import { LargeButton } from "../../../../components/buttons/buttons";
import { Div } from "../configStyles";

function SubjectConfig({ handleSwitch }) {
  const [subjectDetails, setSubjectDetails] = React.useState([
    {
      subjectAbb: "MTH",
      subject: "MATHEMATIC",
      educator: "John Doe",
    },
  ]);
  return (
    <Div className="mt-4">
      <div className="card-header">
        <div className="row ">
          <div className="col-lg-6">
            <h4 className="mt-4">Subjects</h4>
          </div>
          <div className="col-lg-6 ">
            <LargeButton
              className="btn btn-primary float-end"
              name="subjects"
              onClick={(e) => handleSwitch(e)}
            >
              Edit Subject
            </LargeButton>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive text-nowrap col-lg-12">
          <table className="table">
            <thead className="table-light-gray">
              <tr>
                <th>Abbreviation</th>
                <th>Subject Name</th>
                <th>Educator</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {subjectDetails.map((detail, i) => {
                return (
                  <tr key={i}>
                    <td>{detail.subjectAbb}</td>
                    <td>{detail.subject}</td>
                    <td>{detail.educator}</td>
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

export default SubjectConfig;
