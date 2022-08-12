import React, { useState } from "react";
import { InputField } from "../../../components/inputfield/InputField";
import { Row, Form } from "react-bootstrap";
import { TagButton } from "../../../components/buttons/buttons";
import { XIcon } from "../../../components/icons/icons";
import JsonData from "../../../Data/data.json";

function StudentRegForm({
  inputValue,
  error,
  handleChange,
  addSubject,
  deleteSub,
}) {
  const [stateData, setStateData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [lga, setLga] = useState([]);

  React.useEffect(() => {
    setStateData(JsonData.NigerianStates);

    if (selectedState) {
      setLga(selectedState.lgas);
    } else {
      setLga([]);
    }
  }, [selectedState]);

  const handleSetLga = (e) => {
    setSelectedState(
      stateData.find((state) => {
        return state.state === e.target.value;
      })
    );
  };
  // console.log(inputValue);
  return (
    <>
      <Row>
        <InputField
          label="Surname"
          type="text"
          name="surname"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="enter surname"
          // error={error.schoolName}
          className="col-3"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="Middle name"
          type="text"
          name="midName"
          // value={inputValue.middleName}
          onChange={handleChange}
          placeholder="enter middle name"
          // error={error.middleName}
          className="col-3"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          // value={inputValue.firstName}
          onChange={handleChange}
          placeholder="enter first name"
          // error={error.firstName}
          className="col-3"
          inputMargin={3}
          require={true}
        />
        <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">Gender</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={handleChange}
            name="gender"
          >
            <option>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <InputField
          label="Mobile Number"
          type="number"
          name="mobileNum"
          // value={inputValue.mobileNum}
          onChange={handleChange}
          placeholder="enter mobile number"
          // error={error.mobileNum}
          className="col-3"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          // value={inputValue.email}
          onChange={handleChange}
          placeholder="email@example.com"
          // error={error.email}
          className="col-3"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="Home Address"
          type="text"
          name="homeAddress"
          // value={inputValue.homeAddress}
          onChange={handleChange}
          placeholder="enter home address"
          // error={error.homeAddress}
          className="col-6"
          inputMargin={3}
          require={true}
        />
      </Row>
      <Row>
        <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
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
        <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">State</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={(e) => {
              handleChange(e);
              handleSetLga(e);
            }}
            name="stateOfOrigin"
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
        <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">LGA</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={handleChange}
            name="lga"
          >
            <option> select your lga</option>
            {lga?.map((lga) => {
              return (
                <option key={lga} value={lga}>
                  {lga}{" "}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">Religion</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={handleChange}
            name="religion"
          >
            <option>select</option>
            <option value="Christainity">Christainity</option>
            <option value="Islam">Islam</option>
            <option value="others">others</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mt-5">
        <div className="col-4">
          <h4 className="fs-5 fw-bold">Class</h4>
          <Row>
            <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0">Class</Form.Label>
              <Form.Select
                className="mb-3 p-2"
                aria-label="Default select example"
                onChange={handleChange}
                name="class"
              >
                <option>select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0">Section</Form.Label>
              <Form.Select
                className="mb-3 p-2"
                aria-label="Default select example"
                onChange={handleChange}
                name="section"
              >
                <option>select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </div>
        <div className="col-4">
          <h4 className="fs-5 fw-bold">Enrollment Number</h4>
          <Row>
            <InputField
              label="Admission Number"
              type="text"
              name="enrollmentNum"
              // value={inputValue.schoolName}
              onChange={handleChange}
              placeholder="enter admission number"
              // error={error.schoolName}
              className="col-12"
              inputMargin={3}
              require={true}
            />
          </Row>
        </div>
        <div className="col-4">
          <h4 className="fs-5 fw-bold">Subject Offered</h4>
          <Row>
            <div
              className="users-list m-0  d-flex flex-wrap border p-0 rounded"
              style={{ minHeight: "30px" }}
            >
              {inputValue?.subjectOffered.map((subject, tagKey) => (
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
            </div>
            <input
              type="text"
              className="form-control p-2"
              id="exampleFormControlInput1"
              placeholder="enter subject and enter"
              name="subjectOffered"
              onKeyDown={(e) => {
                addSubject(e);
              }}
              style={{
                border: 0,
                borderRadius: 0,
                outline: 0,
                background: "transparent",
                borderBottom: "1px solid ",
              }}
            />
          </Row>
        </div>
      </Row>
      <Row className="mt-5">
        <h4 className="fs-5 fw-bold">Parent Details</h4>

        <InputField
          label="Surname"
          type="text"
          name="pLastName"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="enter surname"
          // error={error.schoolName}
          className="col-4"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="First Name"
          type="text"
          name="pFirstName"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="enter first name"
          // error={error.schoolName}
          className="col-4"
          inputMargin={3}
          require={true}
        />
        <Form.Group className="col-4" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">Gender</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={handleChange}
            name="pGender"
          >
            <option>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <InputField
          label="Phone Number"
          type="number"
          name="pMobileNum"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="enter phone number"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="Email"
          type="email"
          name="pEmail"
          // value={inputValue.schoolName}
          onChange={handleChange}
          placeholder="enter email"
          // error={error.schoolName}
          className="col-6"
          inputMargin={3}
          require={true}
        />
      </Row>
    </>
  );
}

export default StudentRegForm;
