import React from "react";
import { Div } from "../configStyles";
import { Row, Form } from "react-bootstrap";
import { LargeButton, TagButton } from "../../../components/buttons/buttons";
import {
  PlusIcon,
  XIcon,
  CancelIcon,
  SaveIcon,
  DeleteIcon,
} from "../../../components/icons/icons";

function ClassRoomEdit({ handleSwitch }) {
  const [classDetails, setClassDetails] = React.useState([
    { className: "Year 1", section: ["A1", "A2", "B"], capacity: 17 },
    { className: "Year 2", section: ["A1", "A2", "B"], capacity: 10 },
  ]);
  React.useEffect(() => {
    setClassDetails(JSON.parse(localStorage.getItem("class-details")));
  }, []);

  const clone = () => {
    const details = classDetails.map((item) => ({
      ...item,
    }));
    return details;
  };
  const addTag = (e, key) => {
    const { value } = e.target;
    if (e.key === "Enter" && value) {
      const cloneDetails = clone();
      let section = cloneDetails[key].section;
      if (section) {
        section.push(value);
      } else {
        section = [value];
      }
      cloneDetails[key].section = section;
      setClassDetails(cloneDetails);
      e.target.value = "";
    }
  };

  const deleteTag = (rowKey, tagKey) => {
    const cloneDetails = clone();
    let section = cloneDetails[rowKey].section;
    const updatedSection = section.splice(tagKey, 1);
    cloneDetails[rowKey].section = updatedSection;
    setClassDetails(cloneDetails);
  };

  const addClass = () => {
    const cloneDetails = clone();
    cloneDetails.push({
      className: "New Class",
      section: [],
      capacity: 0,
    });
    setClassDetails(cloneDetails);
  };

  const deleteClass = (key) => {
    let cloneDetails = clone();
    cloneDetails.splice(key, 1);
    setClassDetails(cloneDetails);
  };

  const handleSave = () => {
    localStorage.setItem("class-details", JSON.stringify(classDetails));
  };
  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4>Classrooms</h4>
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
                name="classroom"
                onClick={(e) => {
                  handleSave(e);
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
                <th>Class Name</th>
                <th>Sections</th>
                <th>Total Capacity</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {classDetails.map((detail, key) => {
                const editField = (value, colName) => {
                  const cloneDetails = clone();

                  cloneDetails[key][colName] = value;

                  // Trigger re-render
                  setClassDetails(cloneDetails);
                };

                return (
                  <tr
                    key={key}
                    className={detail.editing ? "editing" : ""}
                    onClick={() => {
                      const details = classDetails.map((i) => ({
                        ...i,
                        editing: detail.editing && i === detail,
                      }));

                      details[key].editing = true;

                      setClassDetails(details);
                    }}
                  >
                    <td>
                      {detail.editing ? (
                        <Form.Control
                          value={detail.className}
                          name="className"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="text"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.className
                      )}
                    </td>
                    <td>
                      {
                        <div>
                          <div className="users-list m-0  d-flex  ">
                            {detail?.section.map((section, tagKey) => (
                              <TagButton
                                className="m-1 p-1 rounded text-left d-flex "
                                key={tagKey}
                                onClick={() => deleteTag(key, tagKey)}
                              >
                                {section}
                                <div className="icon">
                                  <XIcon />
                                </div>
                              </TagButton>
                            ))}
                          </div>

                          {detail.editing && (
                            <Form.Control
                              placeholder="enter class section and enter"
                              // name="capacity"
                              onKeyDown={(e) => {
                                addTag(e, key);
                              }}
                              type="text"
                              style={{ width: "fit-content" }}
                            />
                          )}
                        </div>
                      }
                    </td>
                    <td>
                      {detail.editing ? (
                        <Form.Control
                          value={detail.capacity}
                          name="capacity"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="number"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.capacity
                      )}
                    </td>
                    <td>
                      <span onClick={() => deleteClass(key)}>
                        <DeleteIcon />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <LargeButton
          className="btn btn-warning"
          color="#F2994A"
          onClick={addClass}
        >
          add class{" "}
          <span>
            <PlusIcon />
          </span>
        </LargeButton>
      </div>
    </Div>
  );
}

export default ClassRoomEdit;
