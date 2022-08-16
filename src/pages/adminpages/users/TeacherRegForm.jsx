import React from "react";
import { Row, Form } from "react-bootstrap";
import { SwitchButton, TagButton } from "../../../components/buttons/buttons";
import { XIcon } from "../../../components/icons/icons";
import { InputField } from "../../../components/inputfield/InputField";
import BasicModal from "../../../components/modal/Modal";
import JsonData from "../../../Data/data.json";

const subjects = ["MTH", "ENG", "CRK", "FRN"];
function TeacherRegForm({
  inputValue,
  error,
  handleChange,
  addSubject,
  deleteSub,
}) {
  const [stateData, setStateData] = React.useState([]);

  React.useEffect(() => {
    setStateData(JsonData.NigerianStates);
  }, []);

  const [show, setShow] = React.useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();

    setShow(true);
  };
  return (
    <>
      <Row>
        <InputField
          label="Surname"
          type="text"
          name="last_name"
          value={inputValue.last_name}
          onChange={handleChange}
          placeholder="enter surname"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="First Name"
          type="text"
          name="first_name"
          value={inputValue.first_name}
          onChange={handleChange}
          placeholder="enter first name"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
      </Row>
      <Row>
        <InputField
          label="Email"
          type="email"
          name="email"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="email@example.com"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="Address"
          type="text"
          name="address"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="enter address"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
      </Row>
      <Row>
        <InputField
          label="Phone Number"
          type="number"
          name="phone"
          value={inputValue.phone}
          onChange={handleChange}
          placeholder="enter phone number"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="State of Residence"
          type="text"
          name="state"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="enter state of residence"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
      </Row>
      <Row>
        <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">Nationality</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={handleChange}
            name="nationality"
          >
            <option>select</option>
            <option value="Nigerian">Nigerian</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">State</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={(e) => {
              handleChange(e);
            }}
            name="state_of_origin"
          >
            <option> select state</option>
            {stateData?.map((state) => {
              return (
                <option key={state.state} value={state.state}>
                  {state.state}{" "}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <InputField
          label="Spoken and Writing Language"
          type="text"
          name="language"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="spoken and writing language"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
      </Row>
      <Row className="mt-4">
        <h4>
          <h4 className="fs-5 fw-bold">Subject Teach</h4>
        </h4>
        <div
          className="users-list m-0  d-flex flex-wrap border p-0 rounded"
          style={{ minHeight: "30px" }}
        >
          {inputValue?.subject_offered.map((subject, tagKey) => (
            <TagButton
              className="m-1 p-1 rounded text-left d-flex "
              key={tagKey}
              onClick={() => deleteSub(tagKey)}
            >
              {subject}
              <div className="icon">
                <XIcon />
              </div>
            </TagButton>
          ))}

          <button
            className="btn btn-outline-primary p-1 m-1 float-end"
            onClick={handleShow}
          >
            {" "}
            <i className="bx bx-plus-circle"></i>
          </button>
        </div>
      </Row>
      <Row className="mt-4">
        <div className="d-flex">
          {<h4 className="fs-5 fw-bold">A Class Teacher?</h4>}

          <SwitchButton
            id="isClassTeacher"
            inputType="checkbox"
            label=""
            checked={inputValue.isClassTeacher}
            type="primary"
            handleChange={handleChange}
          />
        </div>

        {inputValue.isClassTeacher && (
          <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="mb-0">Class</Form.Label>
            <Form.Select
              className="mb-3 p-2"
              aria-label="Default select example"
              onChange={handleChange}
              name="classroom"
            >
              <option>select class</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
        )}
      </Row>
      <BasicModal handleClose={handleClose} show={show} title="select subjects">
        <div className="d-flex flex-wrap border rounded">
          {subjects.map((subject) => (
            <button
              className="btn btn-sm btn-outline-primary m-2"
              name={subject}
              onClick={addSubject}
            >
              {subject}
            </button>
          ))}
        </div>
      </BasicModal>
    </>
  );
}

export default TeacherRegForm;
