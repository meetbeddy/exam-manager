import React from "react";
import { Div } from "../configStyles";
import { Row, Form } from "react-bootstrap";
import { LargeButton } from "../../../../components/buttons/buttons";
import {
  PlusIcon,
  CancelIcon,
  SaveIcon,
  DeleteIcon,
} from "../../../../components/icons/icons";
import JsonData from "../../../../Data/data.json";
import {
  addsclassdetails,
  deletesclass,
  fetchschooldetails,
} from "../../../../store/actions/adminActions";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../../../store/actions/notificationsActions";
import { useSelector, useDispatch } from "react-redux";

const override = {
  // display: "block",
  margin: "auto",
  borderColor: "yellow",
};

function ClassRoomEdit({ handleSwitch, configs }) {
  const [classDetails, setClassDetails] = React.useState();
  React.useEffect(() => {
    setClassDetails(configs.classes);
  }, [configs.classes]);

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const { isLoading } = useSelector((state) => state.config);

  const clone = () => {
    const details = classDetails.map((item) => ({
      ...item,
    }));
    return details;
  };

  // const addTag = (e, key) => {
  //   const { value } = e.target;
  //   if (e.key === "Enter" && value) {
  //     const cloneDetails = clone();
  //     let denomination = cloneDetails[key].denomination;
  //     if (denomination) {
  //       denomination.push(value);
  //     } else {
  //       denomination = [value];
  //     }
  //     cloneDetails[key].denomination = denomination;
  //     setClassDetails(cloneDetails);
  //     e.target.value = "";
  //   }
  // };

  // const deleteTag = (rowKey, tagKey) => {
  //   const cloneDetails = clone();
  //   let denomination = cloneDetails[rowKey].denomination;
  //   const updatedSection = denomination.splice(tagKey, 1);
  //   cloneDetails[rowKey].denomination = updatedSection;
  //   setClassDetails(cloneDetails);
  // };

  React.useEffect(() => {
    if (notification?.success?.message || notification?.success?.status) {
      handleSwitch("classroom");
      dispatch(fetchschooldetails());
    }
  }, [
    dispatch,
    handleSwitch,
    notification?.success?.message,
    notification?.success?.status,
  ]);

  const addClass = () => {
    const cloneDetails = clone();
    cloneDetails.push({
      level: "PRY",
      number: 1,
      denomination: "A",
      capacity: 0,
    });
    setClassDetails(cloneDetails);
  };

  const deleteClass = (key) => {
    let cloneDetails = clone();
    let clas = cloneDetails.splice(key, 1);
    if (clas[0].id) dispatch(deletesclass(clas[0].id));
    setClassDetails(cloneDetails);
  };

  const handleSave = () => {
    classDetails.forEach((clas) => {
      delete clas.subject;
      delete clas.teacher;
    });
    dispatch(addsclassdetails({ data: classDetails }));
  };

  if (isLoading)
    return (
      <BeatLoader
        color="#242526"
        loading={isLoading}
        cssOverride={override}
        size={50}
      />
    );
  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7 ">
            <h4 className="mt-4">Classrooms</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton
                className="btn btn-outline-danger"
                name="classroom"
                onClick={(e) => {
                  handleSwitch("classroom");
                }}
              >
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton
                className="btn btn-primary"
                name="classroom"
                onClick={(e) => {
                  handleSave(e);
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
                <th>Number</th>
                <th>Section</th>
                <th>Capacity</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {classDetails?.map((detail, key) => {
                const editField = (value, colName) => {
                  const cloneDetails = clone();

                  cloneDetails[key][colName] = value;

                  // Trigger re-render
                  setClassDetails(cloneDetails);
                };

                return (
                  <tr key={key} className={detail.editing ? "editing" : ""}>
                    <td>
                      {detail.editing ? (
                        <Form.Select
                          aria-label="Default select example"
                          value={detail.level}
                          name="level"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                        >
                          {JsonData?.levels?.map((level) => {
                            return (
                              <option key={level} value={level}>
                                {level}{" "}
                              </option>
                            );
                          })}
                        </Form.Select>
                      ) : (
                        detail.level
                      )}
                    </td>
                    <td>
                      {detail.editing ? (
                        <Form.Control
                          value={detail.number}
                          name="number"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="number"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.number
                      )}
                    </td>
                    <td>
                      {detail.editing ? (
                        <Form.Control
                          value={detail.denomination}
                          name="denomination"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="text"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.denomination
                      )}
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
                      {
                        <span
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            const details = classDetails.map((i) => ({
                              ...i,
                              editing: detail.editing && i === detail,
                            }));

                            details[key].editing = true;

                            setClassDetails(details);
                          }}
                        >
                          <i className="bx bx-edit"></i>
                        </span>
                      }
                    </td>
                    <td>
                      <span
                        onClick={() => deleteClass(key)}
                        style={{
                          cursor: "pointer",
                        }}
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
        <LargeButton className="btn btn-primary" onClick={addClass}>
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
