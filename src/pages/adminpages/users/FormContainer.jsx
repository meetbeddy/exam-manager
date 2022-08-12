import React from "react";
import { Div } from "../config/configStyles";
import { LargeButton, MedButton } from "../../../components/buttons/buttons";
import { CancelIcon, SaveIcon } from "../../../components/icons/icons";
import StudentRegForm from "./StudentRegForm";

function FormContainer({ userType }) {
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
    pFirstName: "",
    pLastName: "",
    pGender: "",
    pMobileNum: "",
    pEmail: "",
    language: "",
    image: "",
    imageError: "",
  });

  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const addImage = async (e) => {
    const file = e?.target?.files[0];
    const fileSize = file.size / 1024 / 1024;

    // console.log(fileSize);

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

  const addSubject = (e) => {
    const { value } = e.target;
    if (e.key === "Enter" && value) {
      const subjects = [...inputValue.subjectOffered];

      subjects.push(value);

      setInputValue({ ...inputValue, subjectOffered: subjects });

      e.target.value = "";
    }
  };

  const deleteSub = (tagKey) => {
    let subjects = [...inputValue.subjectOffered];
    subjects.splice(tagKey, 1);
    setInputValue({ ...inputValue, subjectOffered: subjects });
  };

  // const findError = () => {
  //   const {
  //     fullName,
  //     gender,
  //     birthDate,
  //     phone,
  //     occupation,
  //     address,
  //     email,
  //     state,
  //     lga,
  //     town,
  //   } = inputValue;
  //   const newErrors = {};
  //   if (!fullName || fullName === "")
  //     newErrors.fullName = "name cannot be blank!";
  //   if (!gender || gender === "") newErrors.gender = "gender cannot be blank!";
  //   if (!birthDate || birthDate === "")
  //     newErrors.birthDate = "date of birth cannot be blank!";
  //   if (!phone || phone === "") newErrors.phone = "phone cannot be blank!";
  //   if (!occupation || occupation === "")
  //     newErrors.occupation = "occupation cannot be blank!";
  //   if (!address || address === "")
  //     newErrors.address = "address cannot be blank!";
  //   if (!email || email === "") newErrors.email = "email cannot be blank!";
  //   if (!state || state === "") newErrors.state = "state cannot be blank!";
  //   if (!lga || lga === "") newErrors.lga = "lga cannot be blank!";
  //   if (!town || town === "") newErrors.town = "town cannot be blank!";

  //   return newErrors;
  // };

  const handleSubmit = () => {
    console.log();
  };

  console.log(userType);
  return (
    <Div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6 d-flex">
            <h4 className="my-auto">
              {userType === "student"
                ? "Student - Profile Details"
                : "Educator- Profile Details"}
            </h4>
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
                <img
                  src={
                    inputValue.imageURL
                      ? inputValue.imageURL
                      : "../assets/img/school-logo-2.png"
                  }
                  alt="school-logo"
                />
              </div>

              <div className="badge-row-buttons ">
                {/* <MedButton className="btn btn-primary">Upload</MedButton> */}

                <input
                  type="file"
                  className="custom-file-input"
                  name="image"
                  onChange={(e) => addImage(e)}
                ></input>
                <MedButton
                  className="btn btn-light btn-outline-primary"
                  onClick={() => localStorage.removeItem("school-badge")}
                >
                  Reset
                </MedButton>
                {inputValue.imageError ? (
                  <p className="m-2 text-danger">{inputValue.imageError}</p>
                ) : (
                  <p className="m-2">Allowed file types: png, jpg, jpeg.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <StudentRegForm
            inputValue={inputValue}
            handleChange={handleChange}
            addSubject={addSubject}
            deleteSub={deleteSub}
          />
        </div>
      </div>
    </Div>
  );
}

export default FormContainer;
