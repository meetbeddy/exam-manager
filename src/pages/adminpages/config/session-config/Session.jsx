import React from "react";
import { Div } from "../configStyles";
import { Row, Form } from "react-bootstrap";
import { LargeButton } from "../../../../components/buttons/buttons";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";
import SessionExam from "./SessionExam";
dayjs.extend(updateLocale);

function SessionEdit({ handleSwitch, configs }) {
  const sessions = configs.session;

  const [session, setSession] = React.useState({});

  React.useEffect(() => {
    setSession(sessions?.filter((session) => session.current)[0]);
  }, [sessions]);

  const handleChange = (e) => {
    const filter = sessions?.filter(
      (session) => e.target.value === session.name
    )[0];
    setSession(filter);
  };

  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4 className="mt-4">Session</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton
                className="btn btn-outline-primary"
                name="session"
                id="edit"
                onClick={(e) => {
                  handleSwitch(e, session);
                }}
              >
                edit selected session
              </LargeButton>
              <LargeButton
                className="btn btn-primary"
                name="session"
                id="new"
                onClick={(e) => {
                  handleSwitch(e, session);
                }}
              >
                add session
              </LargeButton>
            </div>
          </div>
        </Row>
      </div>
      <div className="card-body ">
        <div className="row mt-0">
          <div className="col-6">
            <div className="row">
              <Form.Group
                className="col-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>session</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="selectedSession"
                  value={session?.name}
                >
                  <option>select academic session</option>
                  {sessions?.map((session, i) => {
                    return (
                      <option key={session?.name + i} value={session?.name}>
                        {session.name}{" "}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <div className="form-check d-flex col-6 align-items-center mt-3">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="defaultCheck3"
                  checked={session?.current}
                />
                <label className="form-check-label m-2" htmlFor="defaultCheck3">
                  {session?.current ? "current session" : "not current session"}
                </label>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <p className="ml-4 float-end">
              <span className="mr-4">
                Starts: {dayjs(session?.start).format("MMM D, YYYY")} - Ends:{" "}
                {dayjs(session?.end).format("MMM D, YYYY")}{" "}
              </span>{" "}
            </p>
          </div>
        </div>

        <SessionExam session={session} />
      </div>
    </Div>
  );
}

export default SessionEdit;
