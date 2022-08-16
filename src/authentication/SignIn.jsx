import React from "react";
import { Form } from "react-bootstrap";
import { MedButton } from "../components/buttons/buttons";
import styled from "styled-components";
import bg from "./assets/registration.png";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { signin } from "../store/actions/authActions";
import { clearNotifications } from "../store/actions/notificationsActions";
import { useSelector, useDispatch } from "react-redux";
import { schoolId } from "../store/api";

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
  console.log(notification);
  const dispatch = useDispatch();

  const [regData, setRegData] = React.useState({
    loading: false,
    isAdmin: false,
  });

  React.useEffect(() => {
    if (notification.success.message) {
      toast.success("sign in success");
      navigate(`../${schoolId}/dashboard/users`, { replace: true });
    }
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
    }
    dispatch(clearNotifications());
    return setRegData({ ...regData, success: false });
  }, [
    dispatch,
    navigate,
    notification?.errors,
    notification.success.message,
    regData.success,
  ]);

  const handleSubmit = (e, credential) => {
    setRegData({ ...regData, loading: true });
    dispatch(signin({ access_token: credential }));
    // regData.stage !== 1 && e.preventDefault();
    // setTimeout(() => {
    //   if (regData.stage === 1) {
    //     setRegData({
    //       ...regData,
    //       success: true,
    //       credential,
    //     });
    //     return;
    //   }
    // }, 2000);
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
                <Form className="text-lowercase">
                  <div className="d-flex">
                    <MedButton
                      className={
                        !regData.isAdmin
                          ? "btn btn-light btn-primary p-2"
                          : "btn btn-outline-light text-black"
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setRegData({ ...regData, isAdmin: false });
                      }}
                    >
                      <span className="btn-label me-2">
                        <i className="bx bx-user-plus"></i>
                      </span>
                      As Teacher
                    </MedButton>

                    <MedButton
                      className={
                        !regData.isAdmin
                          ? "btn btn-outline-light text-black"
                          : "btn btn-light btn-primary p-2"
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setRegData({ ...regData, isAdmin: true });
                      }}
                    >
                      <span className="btn-label me-2">
                        <i className="bx bx-user-plus"></i>
                      </span>
                      As Admin
                    </MedButton>
                  </div>

                  <div className="p-2 mt-4 text-muted">
                    <p>
                      {!regData.isAdmin
                        ? "teacher login"
                        : "administrator login"}
                    </p>
                  </div>
                  {/* -----------google signup ------------*/}

                  <GoogleLogin
                    width="30px"
                    text="signin_with"
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);

                      handleSubmit(null, credentialResponse.credential);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
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
