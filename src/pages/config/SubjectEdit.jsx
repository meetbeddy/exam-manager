import React from "react";
import { Row, Form } from "react-bootstrap";
import { Div } from "./configStyles";
import { LargeButton } from "../../components/buttons/buttons";
import {
  DeleteIcon,
  PlusIcon,
  SaveIcon,
  CancelIcon,
} from "../../components/icons/icons";

function SubjectEdit({ handleSwitch }) {
  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4 className="mt-4">Subjects</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton className="btn btn-danger" color="#CE4040">
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton
                className="btn btn-success"
                color={`#28C76F`}
                name="subjects"
                onClick={(e) => {
                  handleSwitch(e);
                }}
              >
                Save Entries
                <span>
                  <SaveIcon />
                </span>
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
  );
}

export default SubjectEdit;
