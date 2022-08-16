import React from "react";
import { InputField } from "../../../../components/inputfield/InputField";
import { Row } from "react-bootstrap";

function EditForm({ inputValue, error, handleChange }) {
  return (
    <>
      <Row>
        <InputField
          label="School Name"
          type="text"
          name="name"
          value={inputValue.name}
          onChange={handleChange}
          placeholder="Encinx connect high school"
          error={error.name}
          className="col-6"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="Mobile"
          type="number"
          name="phone"
          value={inputValue.phone}
          onChange={handleChange}
          placeholder="enter mobile number"
          error={error.phone}
          className="col-lg-6"
          inputMargin={3}
          require={true}
        />
      </Row>
      <Row>
        <InputField
          label="State"
          type="text"
          name="state"
          value={inputValue.state}
          onChange={handleChange}
          placeholder="Enter state"
          error={error.state}
          className="col-lg-6"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={inputValue.email}
          onChange={handleChange}
          placeholder="johndoe@gmail.com"
          error={error.email}
          className="col-lg-6"
          inputMargin={3}
          require={true}
        />
      </Row>
      <Row>
        <InputField
          label="Address"
          type="text"
          name="address"
          value={inputValue.address}
          onChange={handleChange}
          placeholder="Enter address"
          error={error.address}
          className="col-lg-6"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="Zip Code"
          type="text"
          name="zip_code"
          value={inputValue.zip_code}
          onChange={handleChange}
          placeholder="enter zip code"
          error={error.zip_code}
          className="col-lg-6"
          inputMargin={3}
          require={true}
        />
      </Row>
    </>
  );
}

export default EditForm;
