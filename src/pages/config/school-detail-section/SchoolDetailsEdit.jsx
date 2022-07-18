import React from "react";
import { Div } from "../configStyles";
import { Row } from "react-bootstrap";
import { LargeButton, MedButton } from "../../../components/buttons/buttons";
import { CancelIcon, SaveIcon } from "../../../components/icons/icons";
import { InputField } from "../../../components/inputfield/InputField";

function SchoolDetailsEdit({ handleSwitch }) {
  return (
    <Div className="card">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4>School - Details</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <LargeButton className="btn btn-danger" color="#CE4040">
              Discard Entries
              <span className="btn-label">
                <CancelIcon />
              </span>
            </LargeButton>

            <LargeButton
              className="btn btn-success"
              color={`#28C76F`}
              name="schoolDetails"
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
        </Row>
      </div>
      <div className="card-body">
        <div className="badge-row mt-4">
          <div className="school-badge ">
            <img src="../assets/img/school-logo-2.png" alt="school-logo" />
          </div>
          <div className="badge-row-buttons">
            <MedButton className="btn btn-warning" color="#F2994A">
              Upload
            </MedButton>
            <MedButton className="btn btn-light btn-outline" border="#6e6b7b">
              Reset
            </MedButton>
            <p className="m-2">Allowed file types: png, jpg, jpeg.</p>
          </div>
        </div>
        <div className="form">
          <Row>
            <InputField
              label="School Name"
              type="text"
              name="SchoolName"
              // value={inputValue.lastName}
              // onChange={handleChange}
              placeholder="Encinx connect high school"
              // error={error.lastName}
              className="col-lg-6"
              inputMargin={3}
              require={true}
            />
            <InputField
              label="Mobile"
              type="text"
              name="mobileNumber"
              // value={inputValue.otherName}
              // onChange={handleChange}
              placeholder="enter mobile number"
              // error={error.otherName}
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
              // value={inputValue.lastName}
              // onChange={handleChange}
              placeholder="Enter state"
              // error={error.lastName}
              className="col-lg-6"
              inputMargin={3}
              require={true}
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              // value={inputValue.otherName}
              // onChange={handleChange}
              placeholder="johndoe@gmail.com"
              // error={error.otherName}
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
              // value={inputValue.lastName}
              // onChange={handleChange}
              placeholder="Enter address"
              // error={error.lastName}
              className="col-lg-6"
              inputMargin={3}
              require={true}
            />
            <InputField
              label="Zip Code"
              type="text"
              name="zipCode"
              // value={inputValue.otherName}
              // onChange={handleChange}
              placeholder="enter zip code"
              // error={error.otherName}
              className="col-lg-6"
              inputMargin={3}
              require={true}
            />
          </Row>
        </div>
      </div>
    </Div>
  );
}

export default SchoolDetailsEdit;
