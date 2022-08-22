import React from "react";
import { Div } from "../configStyles";
import { Row, Form } from "react-bootstrap";
import {
  LargeButton,
  SwitchButton,
} from "../../../../components/buttons/buttons";
import { InputField } from "../../../../components/inputfield/InputField";
import { CancelIcon, SaveIcon } from "../../../../components/icons/icons";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";
import SessionExamEdit from "../sessionExam/SessionExamEdit";
import { addsessiondetails } from "../../../../store/actions/adminActions";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../../../store/actions/notificationsActions";
import { useSelector, useDispatch } from "react-redux";

const override = {
  // display: "block",
  margin: "auto",
  borderColor: "yellow",
};
dayjs.extend(updateLocale);

const initialSessionInfo = {
  start: "2000-10-03",
  end: "2001-10-02",
  active_term: "First Term",
  current: false,
  offerFirstTerm: true,
  offerSecondTerm: true,
  offerThirdTerm: true,
};

function SessionEdit({ handleSwitch, data }) {
  const { info } = data;
  const [sessionInfo, setSessionInfo] = React.useState({
    start: "2022-10-03",
    end: "2023-10-02",
    current: true,
    offerFirstTerm: true,
    offerSecondTerm: true,
    offerThirdTerm: true,
  });

  const [activeTerm, setActiveTerm] = React.useState("");

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const { isLoading } = useSelector((state) => state.config);

  React.useEffect(() => {
    if (data.type === "new") {
      setSessionInfo(initialSessionInfo);
      setActiveTerm(initialSessionInfo.active_term);
    }
    if (data.type === "edit") {
      setSessionInfo({
        start: info.start,
        end: info.end,
        current: info.active,
        offerFirstTerm: info?.terms?.includes("First Term"),
        offerSecondTerm: info?.terms?.includes("Second Term"),
        offerThirdTerm: info?.terms?.includes("Third Term"),
      });
      setActiveTerm(info?.active_term);
    }
  }, [
    data?.type,
    info?.active,
    info?.active_term,
    info?.end,
    info?.start,
    info?.terms,
  ]);

  React.useEffect(() => {
    if (notification.success.message) {
      toast.success(notification.success.message);
    }
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
    }
    dispatch(clearNotifications());
  }, [dispatch, notification?.errors, notification.success.message]);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setSessionInfo({ ...sessionInfo, [e.target.id]: e.target.checked });

      if (e.target.checked === false) {
        if (
          (activeTerm === "First Term" && e.target.id === "offerFirstTerm") ||
          (activeTerm === "Second Term" && e.target.id === "offerSecondTerm") ||
          (activeTerm === "Third Term" && e.target.id === "offerThirdTerm")
        ) {
          setActiveTerm("");
        }
      }
    } else if (e.target.type === "radio") {
      setActiveTerm(e.target.id);
    } else {
      setSessionInfo({ ...sessionInfo, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    sessionInfo.active = sessionInfo.current;
    sessionInfo.terms = [];
    sessionInfo.active_term = activeTerm.length > 0 ? activeTerm : "First Term";
    if (sessionInfo.offerFirstTerm) sessionInfo.terms.push("First Term");
    if (sessionInfo.offerSecondTerm) sessionInfo.terms.push("Second Term");
    if (sessionInfo.offerThirdTerm) sessionInfo.terms.push("Third Term");

    sessionInfo.name = `${dayjs(sessionInfo.start).format("YYYY")}/${dayjs(
      sessionInfo.end
    ).format("YYYY")}`;

    dispatch(addsessiondetails(sessionInfo));
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
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4 className="mt-4">
              {data.type === "new" ? "New Session" : "Edit Session"}{" "}
            </h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton className="btn btn-outline-danger">
                Discard Entries
                <span className="btn-label">
                  <CancelIcon />
                </span>
              </LargeButton>

              <LargeButton
                className="btn btn-primary"
                name="session"
                onClick={(e) => {
                  handleSubmit(e);
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
      <div className="card-body ">
        <div className="row mt-0">
          <div className="col-6">
            <Form className="form mt-0">
              <div className="row">
                {" "}
                <InputField
                  label="Start Date"
                  type="date"
                  name="start"
                  value={sessionInfo.start}
                  onChange={handleChange}
                  // error={error.schoolName}
                  className="col-lg-6"
                  inputMargin={3}
                  require={true}
                />
                <InputField
                  label="End Date"
                  type="date"
                  name="end"
                  value={sessionInfo.end}
                  onChange={handleChange}
                  // error={error.schoolName}
                  className="col-lg-6"
                  inputMargin={3}
                  require={true}
                />
              </div>
            </Form>
          </div>
          <div className="col-6 ">
            <div className=" float-end">
              <SwitchButton
                id="current"
                inputType="checkbox"
                label={
                  sessionInfo.current ? "currently active" : "set as active"
                }
                checked={sessionInfo.current}
                type="success"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
        <SessionExamEdit
          session={sessionInfo}
          handleChange={handleChange}
          activeTerm={activeTerm}
        />
      </div>
      <ToastContainer position="top-right" />
    </Div>
  );
}

export default SessionEdit;
