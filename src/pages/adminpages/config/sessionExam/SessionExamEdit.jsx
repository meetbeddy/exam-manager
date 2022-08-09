import React from "react";
import { Div } from "../configStyles";
import { Row, Accordion } from "react-bootstrap";

import {
  LargeButton,
  MyToggle,
  SwitchButton,
} from "../../../../components/buttons/buttons";
import { LockIcon } from "../../../../components/icons/icons";

function SessionExamEdit() {
  const [session, setSession] = React.useState({
    offerFirstTerm: true,
    offerSecondTerm: true,
    offerThirdTerm: true,
  });
  const [activeSession, setActiveSession] = React.useState("");

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setSession({ ...session, [e.target.id]: e.target.checked });

      if (e.target.checked === false) {
        if (
          (activeSession === "firstTerm" && e.target.id === "offerFirstTerm") ||
          (activeSession === "secondTerm" &&
            e.target.id === "offerSecondTerm") ||
          (activeSession === "thirdTerm" && e.target.id === "offerThirdTerm")
        ) {
          setActiveSession("");
        }
      }
    }

    if (e.target.type === "radio") {
      setActiveSession(e.target.id);
    }
  };

  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4 className="mt-4">Session Examinations</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton className="btn btn-outline-primary">
                Add new session
              </LargeButton>

              <LargeButton className="btn btn-primary">
                Make new session
              </LargeButton>
            </div>
          </div>
        </Row>
      </div>
      <div className="card-body">
        <div className="row mt-0">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="col-6">
                  <p className="fw-bold">
                    1st term examination{" "}
                    <span className="border-1 border-start  p-1 fw-normal">
                      <i>Report submission - Active - 5 class remaining</i>{" "}
                    </span>
                    <span className="m-0">
                      <LockIcon />
                    </span>
                  </p>
                </div>

                <div className="col-6 ">
                  <div className="float-end d-flex">
                    <SwitchButton
                      id="offerFirstTerm"
                      inputType="checkbox"
                      label="Offer this examination"
                      checked={session.offerFirstTerm}
                      type="primary"
                      handleChange={handleChange}
                    />
                    <SwitchButton
                      id="firstTerm"
                      inputType="radio"
                      name="active"
                      label="Currently Active"
                      checked={activeSession === "firstTerm" ? true : false}
                      disable={!session.offerFirstTerm ? true : false}
                      type="success"
                      handleChange={handleChange}
                    />
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
                <div className="col-6">
                  <p className="fw-bold">2nd term examination </p>
                </div>

                <div className="col-6 ">
                  <div className="float-end d-flex">
                    <SwitchButton
                      id="offerSecondTerm"
                      inputType="checkbox"
                      label="Offer this examination "
                      checked={session.offerSecondTerm}
                      type="primary"
                      handleChange={handleChange}
                    />
                    <SwitchButton
                      id="secondTerm"
                      inputType="radio"
                      name="active"
                      label="Currently Active"
                      disable={!session.offerSecondTerm ? true : false}
                      checked={activeSession === "secondTerm" ? true : false}
                      type="success"
                      handleChange={handleChange}
                    />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>some content</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="col-6">
                  <p className="fw-bold">3rd term examination </p>
                </div>

                <div className="col-6 ">
                  <div className="float-end d-flex">
                    <SwitchButton
                      id="offerThirdTerm"
                      inputType="checkbox"
                      label="Offer this examination"
                      checked={session.offerThirdTerm}
                      type="primary"
                      handleChange={handleChange}
                    />
                    <SwitchButton
                      id="thirdTerm"
                      inputType="radio"
                      name="active"
                      label="Currently Active"
                      disable={!session.offerThirdTerm ? true : false}
                      checked={activeSession === "thirdTerm" ? true : false}
                      type="success"
                      handleChange={handleChange}
                    />
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
