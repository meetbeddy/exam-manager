import React from "react";
import { Form } from "react-bootstrap";
import { LargeButton } from "../../../../components/buttons/buttons";
import {
  DeleteIcon,
  PlusIcon,
  SaveIcon,
  CancelIcon,
} from "../../../../components/icons/icons";
import { Div } from "../configStyles";

function PromotionEdit({ handleSwitch }) {
  const [gradingDetails, setGradingDetails] = React.useState([
    {
      lowerPercent: 0,
      upperPercent: 40,
      condition: "Repeat Class",
    },
    {
      lowerPercent: 41,
      upperPercent: 60,
      condition: "promoted",
    },
  ]);

  const clone = () => {
    const details = gradingDetails.map((item) => ({
      ...item,
    }));
    return details;
  };
  const addInstruction = () => {
    const cloneDetails = clone();
    cloneDetails.push({
      lowerPercent: 70,
      upperPercent: 100,
      condition: "condition",
    });
    setGradingDetails(cloneDetails);
  };

  const deleteInstruction = (key) => {
    let cloneDetails = clone();
    cloneDetails.splice(key, 1);
    setGradingDetails(cloneDetails);
  };
  return (
    <Div className="mt-4">
      <div className="card-header">
        <div className="row ">
          <div className="col-lg-6">
            <h4 className="mt-4">Promotion Condition</h4>
          </div>
          <div className="col-lg-6 ">
            <div className="float-end">
              <LargeButton className="btn btn-outline-danger">
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton
                className="btn btn-primary"
                name="promotion"
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
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive text-nowrap col-lg-12">
          <table className="table">
            <thead className="table-light-gray">
              <tr>
                <th>Percentage {">"}=</th>
                <th>Percentage {"<"}=</th>
                <th>Condition</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {gradingDetails.map((detail, key) => {
                const editField = (value, colName) => {
                  const cloneDetails = clone();

                  cloneDetails[key][colName] = value;

                  // Trigger re-render
                  setGradingDetails(cloneDetails);
                };
                return (
                  <tr
                    key={key}
                    onClick={() => {
                      const details = gradingDetails.map((i) => ({
                        ...i,
                        editing: detail.editing && i === detail,
                      }));

                      details[key].editing = true;

                      setGradingDetails(details);
                    }}
                  >
                    <td
                      onClick={() => {
                        const details = gradingDetails.map((i) => ({
                          ...i,
                          editing: detail.editing && i === detail,
                        }));

                        details[key].editing = true;

                        setGradingDetails(details);
                      }}
                    >
                      {detail.editing ? (
                        <Form.Control
                          value={detail.lowerPercent}
                          name="lowerPercent"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="number"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.lowerPercent
                      )}
                    </td>
                    <td>
                      {" "}
                      {detail.editing ? (
                        <Form.Control
                          value={detail.upperPercent}
                          name="upperPercent"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="number"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.upperPercent
                      )}
                    </td>
                    <td>
                      {" "}
                      {detail.editing ? (
                        <Form.Select
                          aria-label="Default select example"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          DefaultValue={detail.condition}
                        >
                          <option>select condition</option>
                          <option value="repeat class">Repeat Class</option>
                          <option value="on trial">On Trial</option>
                          <option value="promoted">Promoted</option>
                          <option value="double promoted">
                            Double Promoted
                          </option>
                        </Form.Select>
                      ) : (
                        // <Form.Control
                        //   value={detail.remark}
                        //   name="remark"
                        //   onChange={(e) => {
                        //     editField(e.target.value, e.target.name);
                        //   }}
                        //   type="text"
                        //   style={{ width: "fit-content" }}
                        // />
                        detail.condition
                      )}
                    </td>

                    <td>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={(e) => deleteInstruction(e)}
                      >
                        <DeleteIcon />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <LargeButton className="btn btn-primary" onClick={addInstruction}>
          add condition
          <span>
            <PlusIcon />
          </span>
        </LargeButton>
      </div>
    </Div>
  );
}

export default PromotionEdit;
