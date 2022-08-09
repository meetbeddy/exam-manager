import React from "react";
import { Row, Form } from "react-bootstrap";
import { Div } from "../configStyles";
import { LargeButton } from "../../../../components/buttons/buttons";
import {
  DeleteIcon,
  PlusIcon,
  SaveIcon,
  CancelIcon,
} from "../../../../components/icons/icons";

function SubjectEdit({ handleSwitch }) {
  const [subjectDetails, setSubjectDetails] = React.useState([
    {
      subjectAbb: "MTH",
      subject: "MATHEMATIC",
    },
  ]);
  const clone = () => {
    const details = subjectDetails.map((item) => ({
      ...item,
    }));
    return details;
  };
  const addClass = () => {
    const cloneDetails = clone();
    cloneDetails.push({
      subjectAbb: "SUB",
      subject: `Subject+${cloneDetails.length + 1}`,
    });
    setSubjectDetails(cloneDetails);
  };

  const deleteSubject = (key) => {
    let cloneDetails = clone();
    cloneDetails.splice(key, 1);
    setSubjectDetails(cloneDetails);
  };
  // const handleSave = () => {
  //   localStorage.setItem("class-details", JSON.stringify(classDetails));
  // };
  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4 className="mt-4">Subjects</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton className="btn btn-outline-danger">
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton
                className="btn btn-primary"
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
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {subjectDetails.map((detail, key) => {
                const editField = (value, colName) => {
                  const cloneDetails = clone();

                  cloneDetails[key][colName] = value;

                  // Trigger re-render
                  setSubjectDetails(cloneDetails);
                };
                return (
                  <tr
                    key={key}
                    onClick={() => {
                      const details = subjectDetails.map((i) => ({
                        ...i,
                        editing: detail.editing && i === detail,
                      }));

                      details[key].editing = true;

                      setSubjectDetails(details);
                    }}
                  >
                    <td
                      onClick={() => {
                        const details = subjectDetails.map((i) => ({
                          ...i,
                          editing: detail.editing && i === detail,
                        }));

                        details[key].editing = true;

                        setSubjectDetails(details);
                      }}
                    >
                      {" "}
                      {detail.editing ? (
                        <Form.Control
                          value={detail.subjectAbb}
                          name="subjectAbb"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="text"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.subjectAbb
                      )}
                    </td>
                    <td>
                      {detail.editing ? (
                        <Form.Control
                          value={detail.subject}
                          name="subject"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="text"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.subject
                      )}
                    </td>

                    <td>
                      {detail.editing ? (
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={(e) => deleteSubject(e)}
                        >
                          <DeleteIcon />
                        </span>
                      ) : (
                        <span style={{ cursor: "pointer" }}>
                          <DeleteIcon />
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <LargeButton className="btn btn-primary" onClick={addClass}>
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
