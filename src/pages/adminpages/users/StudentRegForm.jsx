import React from "react";
import { InputField } from "../../../components/inputfield/InputField";
import { Row, Form } from "react-bootstrap";

function StudentRegForm({ inputValue, error, handleChange }) {
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
          name="middleName"
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
            name="gender"
          >
            <option>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">State</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={handleChange}
            name="state"
          >
            <option>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
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
            <option>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
      </Row>
    </>
  );
}

export default StudentRegForm;
