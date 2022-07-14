import React from "react";
import { Row, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { LargeButton, MedButton } from "../components/buttons/buttons";
import { CancelIcon, EditIcon, SaveIcon } from "../components/icons/icons";
import {
  CustomSelect,
  InputField,
  RowBox,
} from "../components/inputfield/InputField";

const Div = styled.div`
  margin: 90px 10px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent !important;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 22px -9px rgba(0, 0, 0, 0.25);
  .card-header {
    border-bottom: 1px solid #ebe9f1 !important;
    background-color: #fff;
    padding: 1rem 1rem;
  }

  h4 {
    font-family: "Montserrat";
    // font-style: normal;
    // font-weight: 500;
    // font-size: 18px;
    // line-height: 22px;

    margin: auto;
    color: #5e5873;
  }
  p {
    height: 24px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .badge-row {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .school-badge {
    height: 135.5314483642578px;
    width: 135.5314483642578px;
    border-radius: 10px;
  }
  .badge-row-buttons {
    position: absolute;
    left: 160px;
    top: 65px;
    ont-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #6e6b7b;
  }
  .form {
    margin-top: 40px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #6e6b7b;
    input {
      height: 38px;
    }
    placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      color: #b9b9c3;
    }
  }
  .edit {
    cursor: pointer;
  }
`;

function TestPage() {
  const options = ["2022/2023", "2023/2024", "2024/2025", "2025/2026"];

  const [selected, setSelected] = React.useState(null);

  const handleSelected = (value) => {
    setSelected(value);
  };
  return (
    <>
      <Div className="card">
        <div className="card-header">
          <Row>
            <div className="col-lg-7">
              <h4>School - Details</h4>
            </div>
            <div className="col-lg-5">
              <LargeButton className="btn btn-danger" color="#CE4040">
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
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
                require={true}
              />
            </Row>
          </div>
        </div>
      </Div>
      <Div className="mt-4">
        <div className="card-header">
          <Row>
            <div className="col-lg-7">
              <p>School - Details</p>
            </div>
            <div className="col-lg-5">
              <LargeButton className="btn btn-warning" color="#F2994A">
                Add new session
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
                Make new session
              </LargeButton>
            </div>
          </Row>
        </div>
        <div className="card-body ">
          <div className="row mt-0">
            <div className="col-lg-8">
              <CustomSelect
                handleSelected={handleSelected}
                selected={selected}
                options={options}
              />
            </div>
            <div className="col-lg-4">
              <p className="ml-4">
                <span className="mr-4">
                  Starts: 29 Oct, 2022 - Ends: 30 Jun, 2023{" "}
                </span>{" "}
                <EditIcon className="edit" />
              </p>
            </div>
          </div>
        </div>
      </Div>
      <Div className="mt-4">
        <div className="card-header">
          <Row>
            <div className="col-lg-7">
              <p className="text-bold">Session Examination</p>
            </div>
            <div className="col-lg-5">
              <LargeButton className="btn btn-warning" color="#F2994A">
                Add new session
              </LargeButton>

              <LargeButton className="btn btn-success" color={`#28C76F`}>
                Make new session
              </LargeButton>
            </div>
          </Row>
        </div>
        <div className="card-body">
          <div className="row mt-0">
            <RowBox />
          </div>
        </div>
      </Div>
    </>
  );
}

export default TestPage;
