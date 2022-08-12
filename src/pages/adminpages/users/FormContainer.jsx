import React from "react";
import { Div } from "../config/configStyles";
import { LargeButton, MedButton } from "../../../components/buttons/buttons";
import { CancelIcon, SaveIcon } from "../../../components/icons/icons";
import StudentRegForm from "./StudentRegForm";

function FormContainer() {
  const [inputValue, setInputValue] = React.useState({
    surname: "",
    midName: "",
    firstName: "",
    gender: "",
    mobileNum: "",
    email: "",
    nationality: "",
    stateOfOrigin: "",
    country: "",
    lga: "",
    homeAddress: "",
    class: "",
    section: "",
    enrollmentNum: "",
    subjectOffered: [],
    pName: "",
    pLastName: "",
    pGender: "",
    pMobileNum: "",
    pEmail: "",
    language: "",
  });

  const [error, setError] = React.useState({});
  return (
    <Div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6 d-flex">
            <h4 className="my-auto">School - Details</h4>
          </div>
          <div className="col-6 ">
            <div className="float-end">
              <LargeButton
                className="btn btn-outline-danger"
                //   onClick={() => clearForm()}
              >
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton
                className="btn btn-primary"
                name="schoolDetails"
                //   onClick={(e) => {
                //     handleSave(e);
                //   }}
              >
                Save Entries
                <span className="btn-label">
                  <SaveIcon />
                </span>
              </LargeButton>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className=" mt-4 row">
          <div className=" col-6">
            <div className="d-flex position-relative">
              <div className="school-badge">
                <img src="../assets/img/school-logo-2.png" alt="school-logo" />
              </div>

              <div className="badge-row-buttons ">
                {/* <MedButton className="btn btn-primary">Upload</MedButton> */}
                <input type="file" className="custom-file-input"></input>
                <MedButton
                  className="btn btn-light btn-outline-primary"
                  onClick={() => localStorage.removeItem("school-badge")}
                >
                  Reset
                </MedButton>
                <p className="m-2">Allowed file types: png, jpg, jpeg.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <StudentRegForm />
        </div>
      </div>
    </Div>
  );
}

export default FormContainer;
