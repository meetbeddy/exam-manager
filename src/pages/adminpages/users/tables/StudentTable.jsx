import React from "react";
import Profile from "../profile/Profile";

function StudentTable({ studentInfo }) {
  const [show, setShow] = React.useState(false);
  const [profile, setProfile] = React.useState();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (data) => {
    setShow(true);
    setProfile(data);
  };
  return (
    <div className="table-responsive text-nowrap col-lg-12">
      <table className="table">
        <thead className="table-light-gray">
          <tr>
            <th>no</th>
            <th>Student Name</th>
            <th>Erl. No.</th>
            <th>Gender</th>
            <th>Class</th>
            {/* <th>Subject Offered</th> */}
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
          {studentInfo.length > 0 ? (
            studentInfo.map((detail, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{detail?.name}</td>
                  <td>{detail?.enrollment_number}</td>
                  <td>{detail?.gender}</td>
                  <td>{detail?.class}</td>
                  {/* <td>
                    {detail?.subjects_offered?.map((subject) => {
                      return subject.name;
                    })}
                  </td> */}
                  <td>
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleShow(detail);
                      }}
                    >
                      <i className="bx bx-show text-primary"></i>
                    </span>{" "}
                  </td>
                </tr>
              );
            })
          ) : (
            <h1> No Info</h1>
          )}
        </tbody>
      </table>
      <Profile
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        profile={profile}
        userType="student"
      />
    </div>
  );
}

export default StudentTable;
