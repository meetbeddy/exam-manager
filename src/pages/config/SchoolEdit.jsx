import React from "react";
import { Div } from "./configStyles";
import { Row, Form } from "react-bootstrap";

import { LargeButton, TagButton } from "../components/buttons/buttons";
import { PlusIcon, XIcon } from "../components/icons/icons";

function SchoolEdit() {
  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4>Classrooms</h4>
          </div>
          <div className="col-lg-6 col-xl-5 ">
            <div className="float-end">
              <LargeButton className="btn btn-warning" color="#F2994A">
                Add new session
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
                Make new session
              </LargeButton>
            </div>
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
  );
}

export default SchoolEdit;
