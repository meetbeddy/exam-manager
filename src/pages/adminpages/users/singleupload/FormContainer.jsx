import React from "react";
import { Div } from "../../config/configStyles";
import { LargeButton, MedButton } from "../../../../components/buttons/buttons";
import { CancelIcon, SaveIcon } from "../../../../components/icons/icons";
import StudentRegForm from "./StudentRegForm";
import TeacherRegForm from "./TeacherRegForm";
import { useSelector, useDispatch } from "react-redux";
import {
  singlestudentreg,
  singlestudentupload,
  singleteacherupload,
} from "../../../../store/actions/adminActions";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../../../store/actions/notificationsActions";
import json from "highlight.js/lib/languages/json";
import { clear } from "@testing-library/user-event/dist/clear";

function FormContainer({ userType }) {
  const [inputValue, setInputValue] = React.useState({
    last_name: "",
    middle_name: "",
    first_name: "",
    gender: "",
    email: "",
    nationality: "",
    state_of_origin: "",
    country: "",
    lga: "",
    address: "",
    religion: "",
    student_class: "",
    enrollment_number: "",
    subjects_offered: [],
    parent_first_name: "",
    parent_last_name: "",
    parent_gender: "",
    parent_phone: "",
    parent_email: "",
    language: "",
    state: "",
    classroom: "",
    image: "",
    imageError: "",
    is_subject_teacher: true,
  });

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setInputValue({ ...inputValue, [e.target.id]: e.target.checked });
    } else {
      setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    }
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
          [e?.target?.name]: file,
          [[e?.target?.name] + "Error"]: null,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const addSubject = (e, selected) => {
    const subjects = [...inputValue.subjects_offered];

    if (selected.action === "clear") {
      setInputValue({ ...inputValue, subjects_offered: [] });
    }
    if (selected.action === "remove-value") {
      const filter = subjects.filter(
        (subject) => subject !== selected.removedValue.value
      );
      setInputValue({ ...inputValue, subjects_offered: filter });
    }

    if (selected.action === "select-option") {
      subjects.push(selected.option.value);
      setInputValue({ ...inputValue, subjects_offered: subjects });
    }
  };

  const deleteSub = (tagKey) => {
    let subjects = [...inputValue.subjects_offered];
    subjects.splice(tagKey, 1);
    setInputValue({ ...inputValue, subjects_offered: subjects });
  };

  React.useEffect(() => {
    if (notification?.success?.message || notification?.success?.status) {
      toast.success("successful");
      clearForm();
      // dispatch(fetchschooldetails());
    }
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
    }
    dispatch(clearNotifications());
  }, [
    dispatch,
    notification?.errors,
    notification?.success?.message,
    notification?.success?.status,
  ]);

  const clearForm = () => {
    setInputValue({
      last_name: "",
      middle_name: "",
      first_name: "",
      gender: "",
      email: "",
      nationality: "",
      state_of_origin: "",
      country: "",
      lga: "",
      address: "",
      religion: "",
      student_class: "",
      enrollment_number: "",
      subjects_offered: [],
      parent_first_name: "",
      parent_last_name: "",
      parent_gender: "",
      parent_phone: "",
      parent_email: "",
      language: "",
      state: "",
      classroom: "",
      image: "",
      imageError: "",
      is_subject_teacher: true,
    });
  };
  const {
    address,
    classroom,
    is_subject_teacher,
    language,
    email,
    enrollment_number,
    first_name,
    gender,
    image,
    last_name,
    lga,
    middle_name,
    nationality,
    parent_email,
    parent_first_name,
    parent_gender,
    parent_last_name,
    parent_phone,
    phone,
    religion,
    state_of_origin,
    student_class,
    state,
    subjects_offered,
  } = inputValue;
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
    if (userType === "student") {
      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("middle_name", middle_name);
      formData.append("last_name", last_name);
      formData.append("nationality", nationality);
      formData.append("state_of_origin", state_of_origin);
      formData.append("lga", lga);
      formData.append("gender", gender);
      formData.append("enrollment_number", enrollment_number);
      formData.append("religion", religion);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("parent_phone", parent_phone);
      formData.append("parent_email", parent_email);
      formData.append("parent_first_name", parent_first_name);
      formData.append("parent_last_name", parent_last_name);
      formData.append("parent_gender", parent_gender);
      formData.append("student_class", student_class);
      formData.append("subjects_offered", subjects_offered.join(","));
      typeof image === "object" && formData.append("image", image);
      dispatch(singlestudentreg(formData));
    } else {
      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("nationality", nationality);
      formData.append("gender", gender);
      formData.append("address", address);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("classroom", classroom);
      formData.append("language", language);
      formData.append("is_subject_teacher", is_subject_teacher);
      formData.append("subjects", subjects_offered.join(","));
      formData.append("state", state);

      typeof image === "object" && formData.append("image", image);
      dispatch(singleteacherupload(formData));
    }
  };

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

              <LargeButton className="btn btn-primary" onClick={handleSubmit}>
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
                  alt="profile"
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
          {userType === "student" ? (
            <StudentRegForm
              inputValue={inputValue}
              handleChange={handleChange}
              addSubject={addSubject}
              deleteSub={deleteSub}
            />
          ) : (
            <TeacherRegForm
              inputValue={inputValue}
              handleChange={handleChange}
              addSubject={addSubject}
              deleteSub={deleteSub}
            />
          )}
        </div>
      </div>
      <ToastContainer position="top-right" />
    </Div>
  );
}

export default FormContainer;
