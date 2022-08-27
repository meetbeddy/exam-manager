import React from "react";
import Select from "react-select";
import { Row, Form } from "react-bootstrap";
import { SwitchButton } from "../../../../components/buttons/buttons";
import { InputField } from "../../../../components/inputfield/InputField";
import JsonData from "../../../../Data/data.json";
import { useSelector } from "react-redux";

function TeacherRegForm({
  inputValue,
  error,
  handleChange,
  addSubject,
  deleteSub,
}) {
  const { configs } = useSelector((state) => state.config);

  const [stateData, setStateData] = React.useState([]);

  React.useEffect(() => {
    setStateData(JsonData.NigerianStates);
  }, []);

  let classList = [];
  let subjectList = [];

  configs?.subjects?.forEach((sub) => {
    return subjectList.push({
      ...sub,
      value: sub.id,
      label: sub.name,
    });
  });
  configs?.classes?.forEach((clas) => {
    return classList.push({
      ...clas,
      value: clas.id,
      label: `${clas.level}  ${clas.number + clas.denomination}`,
    });
  });

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
          value={inputValue.email}
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
          value={inputValue.address}
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
        <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">Gender</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={(e) => {
              handleChange(e);
            }}
            name="gender"
            value={inputValue.gender}
          >
            <option> select gender</option>
            <option value="Male"> Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">Nationality</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={handleChange}
            name="nationality"
            value={inputValue.nationality}
          >
            <option>select</option>
            <option value="Nigerian">Nigerian</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">State Of Origin</Form.Label>
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
        <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">State of Residence</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={(e) => {
              handleChange(e);
            }}
            name="state"
            value={inputValue.state}
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
        <InputField
          label="Spoken and Writing Language"
          type="text"
          name="language"
          value={inputValue.language}
          onChange={handleChange}
          placeholder="spoken and writing language"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
      </Row>
      <Row>
        <div className="users-list m-0  d-flex flex-wrap border p-0 rounded">
          <Select
            className="col-12"
            isMulti={true}
            options={subjectList}
            name="subject_offered"
            onChange={(e, selected) => {
              addSubject(e, selected);
            }}
          />
        </div>
      </Row>
      <Row className="mt-4">
        <div className="d-flex">
          {<h4 className="fs-5 fw-bold">A Class Teacher?</h4>}

          <SwitchButton
            id="is_subject_teacher"
            inputType="checkbox"
            label=""
            checked={inputValue.is_subject_teacher}
            type="primary"
            handleChange={handleChange}
          />
        </div>

        {inputValue.is_subject_teacher && (
          <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="mb-0">Class</Form.Label>
            <Form.Select
              className="mb-3 p-2"
              aria-label="Default select example"
              onChange={handleChange}
              name="classroom"
            >
              <option>select class</option>
              {classList?.map((clas) => (
                <option value={clas.value}>{clas.label}</option>
              ))}
            </Form.Select>
          </Form.Group>
        )}
      </Row>
    </>
  );
}

export default TeacherRegForm;
