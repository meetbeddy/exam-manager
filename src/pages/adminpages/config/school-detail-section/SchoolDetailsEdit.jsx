import React from "react";
import { Div } from "../configStyles";
import { Row, Form } from "react-bootstrap";
import { LargeButton, MedButton } from "../../../../components/buttons/buttons";
import { CancelIcon, SaveIcon } from "../../../../components/icons/icons";
import {
  addschooldetails,
  fetchschooldetails,
} from "../../../../store/actions/adminActions";
import { BeatLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";

import EditForm from "./EditForm";

const override = {
  // display: "block",
  margin: "auto",
  borderColor: "yellow",
};

function SchoolDetailsEdit({ handleSwitch, defaultDetail }) {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const { isLoading } = useSelector((state) => state.config);

  const schooldetails = defaultDetail;

  const [inputValue, setInputValue] = React.useState({
    name: schooldetails.name,
    phone: schooldetails.phone,
    logo: schooldetails.logo,
    school_type: schooldetails.school_type,
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
          [e?.target?.name]: file,
          [[e?.target?.name] + "Error"]: null,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    if (notification?.success?.message || notification?.success?.status) {
      dispatch(fetchschooldetails());
      handleSwitch("schoolDetails");
    }
  }, [
    dispatch,
    handleSwitch,
    notification?.success?.message,
    notification?.success?.status,
  ]);

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
      const {
        name,
        phone,
        logo,
        school_type,
        state,
        email,
        address,
        zip_code,
      } = inputValue;

      const formData = new FormData();

      formData.append("name", name);
      formData.append("phone", phone);
      typeof logo === "object" && formData.append("logo", logo);
      formData.append("school_type", school_type);
      formData.append("state", state);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("zip_code", zip_code);

      dispatch(addschooldetails(formData));
      // handleSwitch(e);
    }
  };

  if (isLoading)
    return (
      <BeatLoader
        color="#242526"
        loading={isLoading}
        cssOverride={override}
        size={50}
      />
    );
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
                name="schoolDetails"
                className="btn btn-outline-danger"
                onClick={(e) => handleSwitch(e)}
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
                      : inputValue.logo
                      ? inputValue.logo
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
                      logo: schooldetails.logo,
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
                  value={inputValue.school_type}
                >
                  <option>select school type</option>
                  <option value="Nursery School">Nursery School</option>
                  <option value="Primary School">Primary School</option>
                  <option value="Secondary School">Secondary School</option>
                  <option value="Nursery and Primary School">
                    Nursery and Primary School
                  </option>
                  <option value="K-12 School">K-12 School</option>
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
    </Div>
  );
}

export default SchoolDetailsEdit;
