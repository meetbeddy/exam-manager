import React from "react";
import { Row, Accordion, Form } from "react-bootstrap";
import styled from "styled-components";
import {
  LargeButton,
  MedButton,
  MyToggle,
  SwitchButton,
  TagButton,
} from "../components/buttons/buttons";
import {
  CancelIcon,
  DeleteIcon,
  EditIcon,
  LockIcon,
  PlusIcon,
  SaveIcon,
  XIcon,
} from "../components/icons/icons";
import {
  CustomSelect,
  InputField,
  RowBox,
} from "../components/inputfield/InputField";

const Div = styled.div`
  margin: 90px 10px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent !important;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 22px -9px rgba(0, 0, 0, 0.25);
  color: #6e6b7b !important;
  .card-header {
    border-bottom: 1px solid #ebe9f1 !important;
    background-color: #fff;
    padding: 1rem 1rem;
  }

  h4 {
    font-family: "Montserrat";
    // font-style: normal;
    // font-weight: 500;
    // font-size: 18px;
    // line-height: 22px;

    margin: auto;
    color: #5e5873;
  }
  p {
    height: 24px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .badge-row,
  .accordion-row {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    .label,
    .button-row {
      width: 50%;
    }
  }
  .school-badge {
    height: 135.5314483642578px;
    width: 135.5314483642578px;
    border-radius: 10px;
  }
  .badge-row-buttons {
    position: absolute;
    left: 160px;
    top: 65px;
    ont-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #6e6b7b;
  }
  .form {
    margin-top: 40px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #6e6b7b;
    input {
      height: 38px;
    }
    placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      color: #b9b9c3;
    }
  }
  .edit {
    cursor: pointer;
  }
`;

function TestPage() {
  const options = ["2022/2023", "2023/2024", "2024/2025", "2025/2026"];

  const [selected, setSelected] = React.useState(null);

  const handleSelected = (value) => {
    setSelected(value);
  };
  return (
    <>
      <Div className="card">
        <div className="card-header">
          <Row>
            <div className="col-lg-6 col-xl-7">
              <h4>School - Details</h4>
            </div>
            <div className="col-lg-6 col-xl-5">
              <LargeButton className="btn btn-danger" color="#CE4040">
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
                Save Entries
                <span>
                  <SaveIcon />
                </span>
              </LargeButton>
            </div>
          </Row>
        </div>
        <div className="card-body">
          <div className="badge-row mt-4">
            <div className="school-badge ">
              <img src="../assets/img/school-logo-2.png" alt="school-logo" />
            </div>
            <div className="badge-row-buttons">
              <MedButton className="btn btn-warning" color="#F2994A">
                Upload
              </MedButton>
              <MedButton className="btn btn-light btn-outline" border="#6e6b7b">
                Reset
              </MedButton>
              <p className="m-2">Allowed file types: png, jpg, jpeg.</p>
            </div>
          </div>
          <div className="form">
            <Row>
              <InputField
                label="School Name"
                type="text"
                name="SchoolName"
                // value={inputValue.lastName}
                // onChange={handleChange}
                placeholder="Encinx connect high school"
                // error={error.lastName}
                className="col-lg-6"
                inputMargin={3}
                require={true}
              />
              <InputField
                label="Mobile"
                type="text"
                name="mobileNumber"
                // value={inputValue.otherName}
                // onChange={handleChange}
                placeholder="enter mobile number"
                // error={error.otherName}
                className="col-lg-6"
                inputMargin={3}
                require={true}
              />
            </Row>
            <Row>
              <InputField
                label="State"
                type="text"
                name="state"
                // value={inputValue.lastName}
                // onChange={handleChange}
                placeholder="Enter state"
                // error={error.lastName}
                className="col-lg-6"
                inputMargin={3}
                require={true}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                // value={inputValue.otherName}
                // onChange={handleChange}
                placeholder="johndoe@gmail.com"
                // error={error.otherName}
                className="col-lg-6"
                inputMargin={3}
                require={true}
              />
            </Row>
            <Row>
              <InputField
                label="Address"
                type="text"
                name="address"
                // value={inputValue.lastName}
                // onChange={handleChange}
                placeholder="Enter address"
                // error={error.lastName}
                className="col-lg-6"
                inputMargin={3}
                require={true}
              />
              <InputField
                label="Zip Code"
                type="text"
                name="zipCode"
                // value={inputValue.otherName}
                // onChange={handleChange}
                placeholder="enter zip code"
                // error={error.otherName}
                className="col-lg-6"
                inputMargin={3}
                require={true}
              />
            </Row>
          </div>
        </div>
      </Div>
      <Div className="mt-4">
        <div className="card-header">
          <Row>
            <div className="col-lg-6 col-xl-7">
              <h4>Session Examinations</h4>
            </div>
            <div className="col-lg-6 col-xl-5">
              <LargeButton className="btn btn-warning" color="#F2994A">
                Add new session
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
                Make new session
              </LargeButton>
            </div>
          </Row>
        </div>
        <div className="card-body ">
          <div className="row mt-0">
            <div className="col-lg-8">
              <CustomSelect
                handleSelected={handleSelected}
                selected={selected}
                options={options}
              />
            </div>
            <div className="col-lg-4">
              <p className="ml-4">
                <span className="mr-4">
                  Starts: 29 Oct, 2022 - Ends: 30 Jun, 2023{" "}
                </span>{" "}
                <span className="edit">
                  <EditIcon />
                </span>
              </p>
            </div>
          </div>
        </div>
      </Div>
      <Div className="mt-4">
        <div className="card-header">
          <Row>
            <div className="col-lg-6 col-xl-7">
              <p className="text-bold">Session Examination</p>
            </div>
            <div className="col-lg-6 col-xl-5">
              <LargeButton className="btn btn-warning" color="#F2994A">
                Add new session
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
                Make new session
              </LargeButton>
            </div>
          </Row>
        </div>
        <div className="card-body">
          <div className="row mt-0">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="accordion-row label">
                    <p className="fw-bold col-lg-6">
                      1st term examination{" "}
                      <span className="border-1 border-start  p-1 fw-normal">
                        <i>Report submission - Active - 5 class remaining</i>{" "}
                      </span>
                      <span className="m-0">
                        <LockIcon />
                      </span>
                    </p>
                    <div className="accordion-row button-row">
                      <SwitchButton id="1" label="Offer this examination" />
                      <SwitchButton id="2" label="Currently Active" />
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="mt-4">
                    <Row>
                      <div className="table-responsive text-nowrap col-lg-6">
                        <table className="table">
                          <thead className="table-light-gray">
                            <tr>
                              <th>Class</th>
                              <th>Prevent Editing Result</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>Year 1 A</td>
                              <td className="tdata">
                                {" "}
                                <MyToggle />
                              </td>
                            </tr>
                            <tr>
                              <td>Year 1 B</td>
                              <td>
                                {" "}
                                <MyToggle />
                              </td>
                            </tr>
                            <tr>
                              <td>Year 2 A</td>
                              <td>
                                {" "}
                                <MyToggle />
                              </td>
                            </tr>
                            <tr>
                              <td>Year 2 B</td>
                              <td>
                                {" "}
                                <MyToggle />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive text-nowrap col-lg-6">
                        <table className="table">
                          <thead className="table-light-gray">
                            <tr>
                              <th>Class</th>
                              <th>Prevent Editing Result</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>Year 3 A</td>
                              <td>
                                {" "}
                                <MyToggle />
                              </td>
                            </tr>
                            <tr>
                              <td>Year 4</td>
                              <td>
                                {" "}
                                <MyToggle />
                              </td>
                            </tr>
                            <tr>
                              <td>Year 5</td>
                              <td>
                                {" "}
                                <MyToggle />
                              </td>
                            </tr>
                            <tr>
                              <td>Year 6</td>
                              <td>
                                {" "}
                                <MyToggle />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Row>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="accordion-row label ">
                    <p className="fw-bold col-lg-6">
                      2nd term examination{" "}
                      {/* <span className="border-4 border-start  p-1 fw-normal">
                        <i>Report submission - Active - 5 class remaining</i>{" "}
                      </span>
                      <span>
                        <LockIcon />
                      </span> */}
                    </p>
                    <div className="accordion-row button-row">
                      <SwitchButton id="3" label="Offer this examination" />
                      <SwitchButton id="4" label="Currently Active" />
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>some content</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="accordion-row label ">
                    <p className="fw-bold col-lg-6">
                      3rd term examination{" "}
                      {/* <span className="border-4 border-start  p-1 fw-normal">
                        <i>Report submission - Active - 5 class remaining</i>{" "}
                      </span>
                      <span>
                        <LockIcon />
                      </span> */}
                    </p>
                    <div className="accordion-row button-row">
                      <SwitchButton id="5" label="Offer this examination" />
                      <SwitchButton id="6" label="Currently Active" />
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>some content</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Div>
      <Div className="mt-4">
        <div className="card-header">
          <Row>
            <div className="col-lg-6 col-xl-7">
              <h4>Subjects</h4>
            </div>
            <div className="col-lg-6 col-xl-5">
              <LargeButton className="btn btn-warning" color="#F2994A">
                Add new session
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
                Make new session
              </LargeButton>
            </div>
          </Row>
        </div>
        <div className="card-body ">
          <div className="table-responsive text-nowrap col-lg-12">
            <table className="table">
              <thead className="table-light-gray">
                <tr>
                  <th>Abbreviation</th>
                  <th>Subject Name</th>
                  <th>Subject Educator</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                <tr>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      value="Math"
                      style={{ width: "fit-content" }}
                    />
                  </td>
                  <td>
                    <Form.Control type="text" value="Mathematics" />
                  </td>
                  <td>
                    <Form.Select aria-label="Default select example">
                      <option>select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </td>
                  <td>
                    <span>
                      <DeleteIcon />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "fit-content" }}>
                    {" "}
                    <Form.Control
                      type="text"
                      value="Eng"
                      style={{ width: "fit-content" }}
                    />
                  </td>
                  <td>
                    <Form.Control type="text" value="English" />
                  </td>
                  <td>
                    <Form.Select aria-label="Default select example">
                      <option>select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </td>
                  <td>
                    <span>
                      <DeleteIcon />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <LargeButton className="btn btn-warning" color="#F2994A">
            add subject{" "}
            <span>
              <PlusIcon />
            </span>
          </LargeButton>
        </div>
      </Div>
      <Div className="mt-4">
        <div className="card-header">
          <Row>
            <div className="col-lg-6 col-xl-7">
              <h4>Classrooms</h4>
            </div>
            <div className="col-lg-6 col-xl-5">
              <LargeButton className="btn btn-warning" color="#F2994A">
                Add new session
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
                Make new session
              </LargeButton>
            </div>
          </Row>
        </div>
        <div className="card-body ">
          <div className="table-responsive text-nowrap col-lg-12">
            <table className="table">
              <thead className="table-light-gray">
                <tr>
                  <th>Class Name</th>
                  <th>Sections</th>
                  <th>Total Capacity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                <tr>
                  <td>Year 1</td>
                  <td>
                    <div className="users-list m-0  d-flex  ">
                      <TagButton className="m-1 p-1 rounded text-left d-flex ">
                        A1
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        A2{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        B{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        C{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                    </div>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value="20"
                      style={{ width: "fit-content" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Year 4</td>
                  <td>
                    <div className="users-list m-0  d-flex  ">
                      <TagButton className="m-1 p-1 rounded text-left d-flex ">
                        A1
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        A2{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        B{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        C{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                    </div>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value="20"
                      style={{ width: "fit-content" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Year 5</td>
                  <td>
                    <div className="users-list m-0  d-flex  ">
                      <TagButton className="m-1 p-1 rounded text-left d-flex ">
                        A1
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        A2{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        B{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        C{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                    </div>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value="20"
                      style={{ width: "fit-content" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Year 6</td>
                  <td>
                    <div className="users-list m-0  d-flex  ">
                      <TagButton className="m-1 p-1 rounded text-left d-flex ">
                        A1
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        A2{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        B{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                      <TagButton className="m-1 p-1 rounded text-left d-flex">
                        C{" "}
                        <div className="icon">
                          <XIcon />
                        </div>
                      </TagButton>
                    </div>
                  </td>
                  <td colspan="2">
                    <Form.Control
                      type="number"
                      value="20"
                      style={{ width: "fit-content" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <LargeButton className="btn btn-warning" color="#F2994A">
            add class{" "}
            <span>
              <PlusIcon />
            </span>
          </LargeButton>
        </div>
      </Div>
    </>
  );
}

export default TestPage;
