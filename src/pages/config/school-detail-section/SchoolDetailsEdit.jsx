import React from "react";
import { Div } from "../configStyles";
import { Row } from "react-bootstrap";
import { LargeButton, MedButton } from "../../../components/buttons/buttons";
import { CancelIcon, SaveIcon } from "../../../components/icons/icons";
import UploadImageModal from "./UploadImageModal";

import EditForm from "./EditForm";

function SchoolDetailsEdit({ handleSwitch, defaultDetail }) {
  const schooldetails =
    JSON.parse(localStorage.getItem("school-details")) || defaultDetail;

  const schoolbadge = localStorage.getItem("school-badge");
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [inputValue, setInputValue] = React.useState({
    schoolName: schooldetails.schoolName,
    mobileNumber: schooldetails.mobileNumber,
    state: schooldetails.state,
    email: schooldetails.email,
    address: schooldetails.address,
    zipCode: schooldetails.zipCode,
  });

  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setInputValue({
      schoolName: "",
      mobileNumber: "",
      state: "",
      email: "",
      address: "",
      zipCode: "",
    });
  };

  const findErrors = () => {
    const { schoolName, mobileNumber, state, email, address, zipCode } =
      inputValue;
    const newErrors = {};
    if (!schoolName || schoolName === "") {
      newErrors.schoolName = "field cannot be blank!";
    }
    if (!mobileNumber || mobileNumber === "") {
      newErrors.mobileNumber = "field cannot be blank!";
    }
    if (!state || state === "") {
      newErrors.state = "field cannot be blank!";
    }
    if (!email || email === "") {
      newErrors.email = "field cannot be blank!";
    }
    if (!address || address === "") {
      newErrors.address = "field cannot be blank!";
    }
    if (!zipCode || zipCode === "") {
      newErrors.zipCode = "field cannot be blank!";
    }
    return newErrors;
  };

  const handleSave = (e) => {
    const newErrors = findErrors();

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      localStorage.setItem("school-details", JSON.stringify(inputValue));
      handleSwitch(e);
    }
  };

  return (
    <Div className="card">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4 className="mt-4">School - Details</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton
                className="btn btn-danger"
                color="#CE4040"
                onClick={() => clearForm()}
              >
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
      <div className="card-body">
        <div className="badge-row mt-4">
          <div className="school-badge ">
            <img
              src={
                schoolbadge ? schoolbadge : "../assets/img/school-logo-2.png"
              }
              alt="school-logo"
            />
          </div>
          <div className="badge-row-buttons">
            <MedButton
              className="btn btn-warning"
              color="#F2994A"
              onClick={handleShow}
            >
              Upload
            </MedButton>
            <MedButton
              className="btn btn-light btn-outline"
              border="#6e6b7b"
              onClick={() => localStorage.removeItem("school-badge")}
            >
              Reset
            </MedButton>
            <p className="m-2">Allowed file types: png, jpg, jpeg.</p>
          </div>
        </div>
        <EditForm
          inputValue={inputValue}
          error={error}
          handleChange={handleChange}
        />
      </div>
      <UploadImageModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </Div>
  );
}

export default SchoolDetailsEdit;
