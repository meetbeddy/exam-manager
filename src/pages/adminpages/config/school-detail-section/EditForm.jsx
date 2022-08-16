import React from "react";
import { Form } from "react-bootstrap";
import { InputField } from "../../../../components/inputfield/InputField";
import JsonData from "../../../../Data/data.json";

import { Row } from "react-bootstrap";

function EditForm({ inputValue, error, handleChange }) {
  const [stateData, setStateData] = React.useState([]);
  React.useEffect(() => {
    setStateData(JsonData.NigerianStates);
  }, []);
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
        <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">State</Form.Label>
          <Form.Select
            className="mb-3 p-2"
            aria-label="Default select example"
            onChange={(e) => {
              handleChange(e);
            }}
            name="state"
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
