import React from "react";
import { Form } from "react-bootstrap";
import SecondaryNav from "../../../components/nav/SecondaryNav";
import { MenuUserIcon } from "../../../components/icons/icons";
import { LargeButton } from "../../../components/buttons/buttons";
import StudentTable from "./tables/StudentTable";
import UploadModal from "./UploadModal";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchstudents,
  fetchteachers,
} from "../../../store/actions/adminActions";
import TeacherTable from "./tables/TeacherTable";

function Index() {
  const [userType, setUserType] = React.useState("student");
  const [uploadType, setUploadType] = React.useState("");

  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.student);
  const { teachers } = useSelector((state) => state.teacher);

  const allStudents = [...students];
  const allTeachers = [...teachers];

  allStudents?.forEach((student) => {
    student.name = `${student?.first_name} ${student?.middle_name} ${student?.last_name}`;
    student.class = `${student?.student_class?.level} ${student?.student_class?.number} ${student?.student_class?.denomination}`;
  });

  allTeachers?.forEach((teacher) => {
    teacher.name = `${teacher?.first_name}  ${teacher?.last_name}`;
    // teacher.class = `${teacher?.student_class?.level} ${teacher?.student_class?.number} ${teacher?.student_class?.denomination}`;
  });

  React.useEffect(() => {
    dispatch(fetchstudents());
    dispatch(fetchteachers());
  }, [dispatch]);

  const handleChange = (e) => {
    setUserType(e.target.value);
  };

  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();

    setShow(true);
    setUploadType(e.target.name);
  };
  return (
    <>
      <SecondaryNav>
        <div className="border p-2 rounded">
          <MenuUserIcon />
          <span className="ms-2 fw-bold">Config</span>
        </div>

        <div aria-label="breadcrumb" className="ms-2 ">
          <ol className="breadcrumb breadcrumb-style1 m-auto ">
            <li className="breadcrumb-item">
              <a href="#yueuu">
                <i className="bx bx-home text-primary"></i>
              </a>
            </li>
            <li className="breadcrumb-item active text-primary">users</li>
          </ol>
        </div>

        <div className="btn-group ms-auto">
          <LargeButton
            type="button"
            className="btn btn-primary dropdown-toggle hide-arrow"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Upload Users
          </LargeButton>
          <ul className="dropdown-menu">
            <p className="m-2 fs-6 fw-bold text-primary">upload {userType}</p>
            <li>
              <a
                className="dropdown-item"
                href="null"
                name="upload"
                onClick={(e) => handleShow(e)}
              >
                Upload .CSV file <i className="bx bxs-cloud-upload"></i>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#iei">
                Download Sample file <i className="bx bxs-download"></i>
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#iei"
                name="singleReg"
                onClick={(e) => handleShow(e)}
              >
                Single User Reg <i className="bx bx-user"></i>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </ul>
        </div>
      </SecondaryNav>

      <div className="row">
        <div className="col-xl">
          <div className="card mb-4">
            <div className="row card-header">
              <div
                class="d-flex align-items-center align-self-baseline col-4 border rounded shadow-sm m-auto"
                // style={{ maxHeight: "48px" }}
              >
                <input
                  type="text"
                  class="form-control border-0 shadow-none"
                  placeholder="Search user..."
                  aria-label="Search..."
                />
                <i class="bx bx-search fs-4 lh-0"></i>
              </div>
              <div className="col-8">
                <Form className="form mt-0 float-end fs-4">
                  <div className="d-flex justify-content-end">
                    <Form.Group
                      className="col-3 me-1 "
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>user type</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        style={{ height: "38px" }}
                        onChange={handleChange}
                        name="userType"
                      >
                        <option value="student">Student</option>
                        <option value="educator">Educator</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="col-3 me-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>class</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={handleChange}
                        name="class"
                      >
                        <option>select academic session</option>
                        <option value="2022/2023">2022/2023</option>
                        <option value="2023/2024">2023/2024</option>
                        <option value="2024/2025">2024/2025</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="col-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>session</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={handleChange}
                        name="session"
                      >
                        <option>select academic session</option>
                        <option value="2022/2023">2022/2023</option>
                        <option value="2023/2024">2023/2024</option>
                        <option value="2024/2025">2024/2025</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </Form>
              </div>
            </div>

            <div className="card-body">
              {userType === "student" ? (
                <StudentTable studentInfo={allStudents} />
              ) : (
                <TeacherTable teacherInfo={allTeachers} />
              )}
            </div>
          </div>
        </div>
      </div>
      <UploadModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        // inputValue={inputValue}
        handleChange={handleChange}
        modalId="exLargeModal"
        uploadType={uploadType}
        userType={userType}
      />
    </>
  );
}

export default Index;
