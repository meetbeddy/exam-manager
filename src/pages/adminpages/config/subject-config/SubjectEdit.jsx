import React from "react";
import { Row, Form } from "react-bootstrap";
import { Div } from "../configStyles";
import { LargeButton, TagButton } from "../../../../components/buttons/buttons";
import Select from "react-select";
import {
  DeleteIcon,
  PlusIcon,
  SaveIcon,
  CancelIcon,
  XIcon,
} from "../../../../components/icons/icons";
import {
  addsubjectdetails,
  fetchschooldetails,
  deletesubject,
} from "../../../../store/actions/adminActions";
import { BeatLoader } from "react-spinners";

import { useSelector, useDispatch } from "react-redux";

const override = {
  // display: "block",
  margin: "auto",
  borderColor: "yellow",
};

function SubjectEdit({ handleSwitch }) {
  const { configs } = useSelector((state) => state.config);

  let classList = [];
  let subject = configs?.subjects;

  configs.classes.forEach((clas) => {
    return classList.push({
      ...clas,
      value: clas.id,
      label: `${clas.level}  ${clas.number} ${clas.denomination}`,
    });
  });

  const [subjectDetails, setSubjectDetails] = React.useState([]);

  React.useEffect(() => {
    let formatted = subject.map((sub) => {
      let class_list = [];
      sub?.subject_classes?.map((clas) => {
        return class_list.push(clas?.id);
      });

      sub.subject_classes_new = class_list;
      return sub;
    });

    setSubjectDetails(formatted);
  }, [subject]);

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const { isLoading } = useSelector((state) => state.config);

  // console.log(notification);
  React.useEffect(() => {
    if (notification?.success?.message) {
      dispatch(fetchschooldetails());
      handleSwitch("subjects");
    }
  }, [dispatch, handleSwitch, notification?.errors, notification?.success]);

  const clone = () => {
    const details = subjectDetails.map((item) => ({
      ...item,
    }));
    return details;
  };

  const addSubject = () => {
    const cloneDetails = clone();
    cloneDetails.push({
      abbreviation: "SUB",
      name: `Subject+${cloneDetails.length + 1}`,
      subject_classes: [],
    });
    setSubjectDetails(cloneDetails);
  };

  const deleteSubject = (key) => {
    let cloneDetails = clone();
    const subject = cloneDetails.splice(key, 1);
    if (subject[0].id) dispatch(deletesubject(subject[0].id));
    setSubjectDetails(cloneDetails);
  };

  const addClasses = (e, selected, key) => {
    const cloneDetails = clone();

    const subject = cloneDetails[key];

    const classes = [...subject.subject_classes];

    if (selected.action === "clear") {
      cloneDetails[key].subject_classes_new = [];

      setSubjectDetails(cloneDetails);
    }
    if (selected.action === "remove-value") {
      const filter = classes.filter(
        (name) => name !== selected.removedValue.value
      );
      cloneDetails[key].subject_classes_new = filter;
      setSubjectDetails(cloneDetails);
    }

    if (selected.action === "select-option") {
      cloneDetails[key].subject_classes_new.push(selected.option.value);
      setSubjectDetails(cloneDetails);
    }
  };

  const deleteTag = (rowKey, tagKey) => {
    const cloneDetails = clone();
    let section = cloneDetails[rowKey].subject_classes_new;
    section.splice(tagKey, 1);

    cloneDetails[rowKey].subject_classes_new = section;
    setSubjectDetails(cloneDetails);
  };

  const handleSave = () => {
    subjectDetails.forEach((subject) => {
      delete subject.editing;
      delete subject.teacher;
      delete subject.topic;
      subject.subject_classes = [...subject.subject_classes_new];
    });

    dispatch(addsubjectdetails({ data: subjectDetails }));
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
          <div className="col-lg-6 col-xl-7">
            <h4 className="mt-4">Edit Subjects</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton
                className="btn btn-outline-danger"
                name="subjects"
                onClick={(e) => {
                  handleSwitch("subjects");
                }}
              >
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton
                className="btn btn-primary"
                name="subjects"
                onClick={(e) => {
                  handleSave();
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
        <div
          className="table-responsive text-nowrap col-lg-12"
          style={{ minHeight: "500px" }}
        >
          <table className="table">
            <thead className="table-light-gray">
              <tr>
                <th>Abbreviation</th>
                <th>Subject Name</th>
                <th>Classes Offering Subject</th>
              </tr>
            </thead>
            <tbody
              className="table-border-bottom-0"
              // style={{ zIndex: 100, position: "relative" }}
            >
              {subjectDetails?.map((detail, key) => {
                const editField = (value, colName) => {
                  const cloneDetails = clone();

                  cloneDetails[key][colName] = value;

                  // Trigger re-render
                  setSubjectDetails(cloneDetails);

                  console.log(detail);
                };
                return (
                  <tr key={key}>
                    <td>
                      {" "}
                      {detail.editing ? (
                        <Form.Control
                          value={detail.abbreviation}
                          name="abbreviation"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="text"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.abbreviation
                      )}
                    </td>
                    <td>
                      {detail.editing ? (
                        <Form.Control
                          value={detail.name}
                          name="name"
                          onChange={(e) => {
                            editField(e.target.value, e.target.name);
                          }}
                          type="text"
                          style={{ width: "fit-content" }}
                        />
                      ) : (
                        detail.name
                      )}
                    </td>

                    <td>
                      {detail.editing ? (
                        <div>
                          <Select
                            className="col-12"
                            isMulti={true}
                            options={classList}
                            name="classes"
                            onChange={(e, selected) => {
                              addClasses(e, selected, key);
                            }}
                          />
                        </div>
                      ) : (
                        <div className="users-list m-0  d-flex flex-wrap border p-0 rounded">
                          {detail?.subject_classes_new?.map(
                            (section, tagKey) => {
                              let classLabel = classList.find((clas) => {
                                return clas.value === section;
                              });

                              return (
                                <TagButton
                                  className="m-1 p-1 rounded text-left d-flex "
                                  key={tagKey}
                                  onClick={() => deleteTag(key, tagKey)}
                                >
                                  {classLabel?.label}
                                  <div className="icon">
                                    <XIcon />
                                  </div>
                                </TagButton>
                              );
                            }
                          )}
                        </div>
                      )}
                    </td>
                    <td>
                      <span
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          const details = subjectDetails.map((i) => ({
                            ...i,
                            editing: detail.editing && i === detail,
                          }));

                          details[key].editing = true;

                          setSubjectDetails(details);
                        }}
                      >
                        <i className="bx bx-edit"></i>
                      </span>
                    </td>

                    <td>
                      {
                        <span
                          style={{
                            cursor: "pointer",
                            zIndex: 100,
                            position: "relative",
                          }}
                          onClick={() => deleteSubject(key)}
                        >
                          <DeleteIcon />
                        </span>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <LargeButton className="btn btn-primary" onClick={addSubject}>
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
