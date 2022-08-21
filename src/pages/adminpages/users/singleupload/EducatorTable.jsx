import React from "react";

function EducatorTable({ studentInfo }) {
  return (
    <div className="table-responsive text-nowrap col-lg-12">
      <table className="table">
        <thead className="table-light-gray">
          <tr>
            <th>Student Name</th>
            <th>Erl. No.</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Subject Offered</th>
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
          {studentInfo.length > 0 ? (
            studentInfo.map((detail, i) => {
              return (
                <tr key={i}>
                  <td>{detail.subjectAbb}</td>
                  <td>{detail.subject}</td>
                  <td>{detail.educator}</td>
                </tr>
              );
            })
          ) : (
            <h1> No info</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EducatorTable;
