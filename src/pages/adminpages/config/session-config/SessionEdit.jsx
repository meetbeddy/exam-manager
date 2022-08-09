import React from "react";
import { Div } from "../configStyles";
import { Row, Form } from "react-bootstrap";
import { LargeButton } from "../../../../components/buttons/buttons";
import { EditIcon } from "../../../../components/icons/icons";
import SessionModal from "./SessionModal";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";
dayjs.extend(updateLocale);

function SessionEdit({ handleSwitch, defaultDetail }) {
  const [inputValue, setInputValue] = React.useState({
    startDate: "2022-10-03",
    endDate: "2023-10-02",
    session: "",
  });

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4 className="mt-4">New Session</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="float-end">
              <LargeButton className="btn btn-outline-primary">
                Add new session
              </LargeButton>

              <LargeButton
                className="btn btn-primary"
                name="session"
                onClick={(e) => {
                  handleSwitch(e);
                }}
              >
                Make new session
              </LargeButton>
            </div>
          </div>
        </Row>
      </div>
      <div className="card-body ">
        <div className="row mt-0">
          <div className="col-6">
            <Form className="form mt-0">
              <Form.Group
                className="col-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>session</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="session"
                >
                  <option>select academic session</option>
                  <option value="2022/2023">2022/2023</option>
                  <option value="2023/2024">2023/2024</option>
                  <option value="2024/2025">2024/2025</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
          <div className="col-6 ">
            <p className="ml-4 float-end">
              <span className="mr-4">
                Starts: {dayjs(inputValue.startDate).format("MMM D, YYYY")} -
                Ends: {dayjs(inputValue.endDate).format("MMM D, YYYY")}{" "}
              </span>{" "}
              <span className="edit" onClick={handleShow}>
                <EditIcon />
              </span>
            </p>
          </div>
        </div>
      </div>
      <SessionModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        inputValue={inputValue}
        handleChange={handleChange}
      />
    </Div>
  );
}

export default SessionEdit;
