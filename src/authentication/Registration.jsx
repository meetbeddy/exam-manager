import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { InputField } from "../components/inputfield/InputField";
import bg from "./assets/registration.png";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { signup } from "../store/actions/authActions";
import { clearNotifications } from "../store/actions/notificationsActions";
import { useSelector, useDispatch } from "react-redux";

const override = {
  // display: "block",
  margin: "auto",
  borderColor: "yellow",
};

const Styles = styled.div`
  .background {
    width: 30%;
    background: url(${bg});
    background-position: top center;
    height: 85vh;

    background-size: cover;
    background-repeat: no-repeat;
  }
  .reg-form {
    width: 70%;
  }
`;
function Registration() {
  const navigate = useNavigate();
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const [regData, setRegData] = React.useState({
    stage: 1,
    loading: false,
    credential: "",
    schoolName: "",
    urlName: "",
    code: "",
    buttonTitle: ["proceed", "finalize"],
  });

  React.useEffect(() => {
    if (regData.success) toast.success("successful");
    if (notification.success.message) {
      toast.success("successful");
      navigate("init-config");
    }
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
      dispatch(clearNotifications());
    }

    return setRegData({ ...regData, success: false });
  }, [
    dispatch,
    navigate,
    notification?.errors,
    notification.success.message,
    regData.success,
  ]);

  const handleChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e, credential) => {
    setRegData({ ...regData, loading: true });

    regData.stage !== 1 && e.preventDefault();
    setTimeout(() => {
      if (regData.stage === 1) {
        setRegData({
          ...regData,
          stage: 2,
          loading: false,
          success: true,
          credential,
        });
        return;
      }
    }, 2000);

    setTimeout(() => {
      if (regData.stage === 2) {
        setRegData({ ...regData, loading: false });
        let formData = {};
        formData.access_token = regData.credential;
        formData.name = regData.schoolName;
        formData.code = regData.code;
        formData.url_name = regData.urlName;

        dispatch(signup(formData));
      }
    }, 2000);
  };

  return (
    <Styles className="container-xxl">
      <div className=" authentication-basic container-p-y">
        <div className="authentication-inner py-4 d-flex align-items-center justify-content-center">
          <div className="background"></div>
          <div className="reg-form">
            <div className=" w-75 mx-auto border-0">
              <BeatLoader
                color="#242526"
                loading={regData.loading}
                cssOverride={override}
                size={50}
              />
              {!regData.loading && (
                <Form className="text-lowercase" onSubmit={handleSubmit}>
                  {regData.stage !== 1 && (
                    <div className="d-flex">
                      <div className="d-flex mb-4 pb-1 mr-4">
                        <div className="avatar flex-shrink-0 me-3">
                          <span
                            className={
                              regData.stage === 2
                                ? `avatar-initial rounded bg-primary`
                                : `avatar-initial rounded bg-label-secondary`
                            }
                          >
                            <i className="bx bx-user" />
                          </span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6
                              className={
                                regData.stage === 2
                                  ? `text-primary mb-0`
                                  : `text-secondary mb-0`
                              }
                            >
                              School Signup
                            </h6>
                            <small className="text-muted">
                              super admin signup
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex mb-4 pb-1">
                        <div className="avatar flex-shrink-0 me-3">
                          <span
                            className={
                              regData.stage === 3
                                ? `avatar-initial rounded bg-primary`
                                : `avatar-initial rounded bg-label-secondary`
                            }
                          >
                            <i className="bx bx-key" />
                          </span>
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6
                              className={
                                regData.stage === 3
                                  ? `text-primary mb-0`
                                  : `text-secondary mb-0`
                              }
                            >
                              <span className="text-capitalize">OTP </span> Key
                              Activation
                            </h6>
                            <small className="text-muted">
                              Find <span className="text-capitalize">OTP </span>{" "}
                              in email
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* -----------google signup ------------*/}
                  {regData.stage === 1 && (
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);

                        handleSubmit(null, credentialResponse.credential);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  )}
                  {regData.stage === 2 && (
                    <>
                      <InputField
                        label="School Name"
                        type="text"
                        name="schoolName"
                        value={regData.schoolName}
                        onChange={handleChange}
                        placeholder="school full name"
                        // error={error.schoolName}
                        className="col-lg-8 "
                        inputMargin={3}
                        require={true}
                      />
                      <InputField
                        label="school acronym"
                        type="text"
                        name="urlName"
                        value={regData.urlName}
                        onChange={handleChange}
                        placeholder="school acronym"
                        // error={error.schoolName}
                        className="col-lg-8 "
                        inputMargin={3}
                        require={true}
                      />
                      <InputField
                        label="invitation code"
                        type="text"
                        name="code"
                        value={regData.code}
                        onChange={handleChange}
                        placeholder="enter invite code"
                        // error={error.schoolName}
                        className="col-lg-8 "
                        inputMargin={3}
                        require={true}
                      />
                    </>
                  )}
                  {/* {regData.stage === 3 && (
                    <>
                      <Alert variant="transaprent" className="border col-lg-8 ">
                        <Alert.Heading>some email</Alert.Heading>
                        Please stay alert, an OTP code will be sent to the above
                        email shortly. <a href="#yus"> Change email</a>
                      </Alert>
                      <InputField
                        label="Enter OTP"
                        type="text"
                        name="otp"
                        // value={inputValue.schoolName}
                        onChange={handleChange}
                        placeholder="enter OTP"
                        // error={error.schoolName}
                        className="col-lg-8"
                        inputMargin={3}
                        require={true}
                      />
                    </>
                  )} */}

                  {regData.stage !== 1 && (
                    <button className="btn btn-primary ">
                      {" "}
                      {regData.buttonTitle[regData.stage - 1]}
                    </button>
                  )}
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </Styles>
  );
}

export default Registration;
