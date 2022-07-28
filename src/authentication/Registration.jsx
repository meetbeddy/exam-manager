import React from "react";
import { Form, Alert } from "react-bootstrap";
import styled from "styled-components";
import { InputField } from "../components/inputfield/InputField";
import bg from "./assets/registration.png";

const Styles = styled.div`
  .background {
    width: 30%;
    background: url(${bg});
    background-position: top center;
    height: 85vh;
    // margin-top: -70px;

    background-size: cover;
    background-repeat: no-repeat;
  }
  .reg-form {
    width: 70%;
  }
`;
function Registration() {
  const [regData, setRegData] = React.useState({ stage: 1 });

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    regData.stage === 1 && setRegData({ ...regData, stage: 2 });
    regData.stage === 2 && setRegData({ ...regData, stage: 3 });
  };
  return (
    <Styles className="container-xxl">
      <div className=" authentication-basic container-p-y">
        <div className="authentication-inner py-4 d-flex align-items-center justify-content-center">
          <div className="background"></div>
          <div className="reg-form">
            <div className=" w-75 mx-auto border-0">
              <Form className="text-lowercase" onSubmit={handleSubmit}>
                {regData.stage === 1 && (
                  <InputField
                    label="enter your secret to signup"
                    type="text"
                    name="schoolName"
                    // value={inputValue.schoolName}
                    // onChange={handleChange}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    // error={error.schoolName}
                    className="col-lg-8"
                    inputMargin={3}
                    require={true}
                  />
                )}
                {regData.stage === 2 && (
                  <>
                    <InputField
                      label="enter school email"
                      type="text"
                      name="schoolEmail"
                      // value={inputValue.schoolName}
                      // onChange={handleChange}
                      placeholder="schoolemail@gmail.com"
                      // error={error.schoolName}
                      className="col-lg-8 "
                      inputMargin={3}
                      require={true}
                    />
                    <InputField
                      label="password"
                      type="password"
                      name="schoolPassword"
                      // value={inputValue.schoolName}
                      // onChange={handleChange}
                      placeholder="enter password"
                      // error={error.schoolName}
                      className="col-lg-8 "
                      inputMargin={3}
                      require={true}
                    />
                    <InputField
                      label="Repeat Password"
                      type="password"
                      name="verifyPassword"
                      // value={inputValue.schoolName}
                      // onChange={handleChange}
                      placeholder="repeat password"
                      // error={error.schoolName}
                      className="col-lg-6 "
                      inputMargin={3}
                      require={true}
                    />
                  </>
                )}
                {regData.stage === 3 && (
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
                      // onChange={handleChange}
                      placeholder="enter OTP"
                      // error={error.schoolName}
                      className="col-lg-8"
                      inputMargin={3}
                      require={true}
                    />
                  </>
                )}

                <button className="btn btn-primary "> verify me</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default Registration;
