import React from "react";
import { Div } from "./configStyles";
import { Row, Accordion } from "react-bootstrap";

import {
  LargeButton,
  MyToggle,
  SwitchButton,
} from "../../components/buttons/buttons";
import { LockIcon } from "../../components/icons/icons";

function SessionExamEdit() {
  return (
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
  );
}

export default SessionExamEdit;
