import React from "react";
import { Div } from "../configStyles";
import { Row, Form } from "react-bootstrap";
import { LargeButton, MedButton } from "../../../../components/buttons/buttons";
import { CancelIcon, SaveIcon } from "../../../../components/icons/icons";
import UploadImageModal from "./UploadImageModal";
import JsonData from "../../../../Data/data.json";

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

  const [stateData, setStateData] = React.useState([]);

  React.useEffect(() => {
    setStateData(JsonData.NigerianStates);
  }, []);

  const [inputValue, setInputValue] = React.useState({
    name: schooldetails.name,
    phone: schooldetails.phone,
    logo: "",
    school_type: "",
    state: schooldetails.state,
    email: schooldetails.email,
    address: schooldetails.address,
    zip_code: schooldetails.zip_code,
  });

  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const addImage = async (e) => {
    const file = e?.target?.files[0];
    const fileSize = file.size / 1024 / 1024;

    setInputValue({
      ...inputValue,
      [[e?.target?.name] + "Error"]: null,
    });

    if (fileSize.toFixed(2) > 1) {
      setInputValue({
        ...inputValue,
        [[e?.target?.name] + "Error"]: "file cannot exceed 1mb",
        [e?.target?.name]: null,
      });
    } else {
      const reader = new FileReader();

      reader.onloadend = () => {
        setInputValue({
          ...inputValue,
          [[e?.target?.name] + "URL"]: URL.createObjectURL(file),
          [e?.target?.name]: reader.result,
          [[e?.target?.name] + "Error"]: null,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const clearForm = () => {
    setInputValue({
      name: "",
      phone: "",
      state: "",
      email: "",
      address: "",
      zip_code: "",
      schoolType: "",
    });
  };

  const findErrors = () => {
    const { name, phone, state, email, address, zip_code } = inputValue;
    const newErrors = {};
    if (!name || name === "") {
      newErrors.name = "field cannot be blank!";
    }
    if (!phone || phone === "") {
      newErrors.phone = "field cannot be blank!";
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
    if (!zip_code || zip_code === "") {
      newErrors.zip_code = "field cannot be blank!";
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
          <div className="col-6 col-sm-12">
            <h4 className="mt-4">School - Details</h4>
          </div>
          <div className="col-6 col-sm-12">
            <div className="float-end">
              <LargeButton
                className="btn btn-outline-danger"
                onClick={() => clearForm()}
              >
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton
                className="btn btn-primary"
                name="schoolDetails"
                onClick={(e) => {
                  handleSave(e);
                }}
              >
                Save Entries
                <span className="btn-label">
                  <SaveIcon />
                </span>
              </LargeButton>
            </div>
          </div>
        </Row>
      </div>
      <div className="card-body">
        <div className=" mt-4 row">
          <div className=" col-6">
            <div className="d-flex position-relative">
              <div className="school-badge">
                <img
                  src={
                    inputValue.logoURL
                      ? inputValue.logoURL
                      : "../assets/img/school-logo-2.png"
                  }
                  alt="school-logo"
                />
              </div>

              <div className="badge-row-buttons ">
                <input
                  type="file"
                  className="custom-file-input"
                  name="logo"
                  onChange={(e) => addImage(e)}
                ></input>
                <MedButton
                  className="btn btn-light btn-outline-primary"
                  onClick={() => {
                    setInputValue({
                      ...inputValue,
                      logoURL: "",
                    });
                  }}
                >
                  Reset
                </MedButton>
                {inputValue.imageError ? (
                  <p className="m-2 text-danger">{inputValue.logoError}</p>
                ) : (
                  <p className="m-2">Allowed file types: png, jpg, jpeg.</p>
                )}
              </div>
            </div>
          </div>

          <div className="col-6 float-end">
            <Form className="form">
              <Form.Group
                className="col-12"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Type of School</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="school_type"
                >
                  <option>select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="form">
          <EditForm
            inputValue={inputValue}
            error={error}
            handleChange={handleChange}
          />
        </div>
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
