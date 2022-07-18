import React from "react";
import { Div } from "./configStyles";
import { Row } from "react-bootstrap";
import { LargeButton } from "../../components/buttons/buttons";
import { EditIcon } from "../../components/icons/icons";
import { CustomSelect } from "../../components/inputfield/InputField";

function SessionEdit() {
  const options = ["2022/2023", "2023/2024", "2024/2025", "2025/2026"];

  const [selected, setSelected] = React.useState(null);

  const handleSelected = (value) => {
    setSelected(value);
  };
  return (
    <Div className="mt-4">
      <div className="card-header">
        <Row>
          <div className="col-lg-6 col-xl-7">
            <h4>Session Examinations</h4>
          </div>
          <div className="col-lg-6 col-xl-5">
            <LargeButton className="btn btn-warning" color="#F2994A">
              Add new session
            </LargeButton>

            <LargeButton className="btn btn-success" color={`#28C76F`}>
              Make new session
            </LargeButton>
          </div>
        </Row>
      </div>
      <div className="card-body ">
        <div className="row mt-0">
          <div className="col-lg-8">
            <CustomSelect
              handleSelected={handleSelected}
              selected={selected}
              options={options}
            />
          </div>
          <div className="col-lg-4">
            <p className="ml-4">
              <span className="mr-4">
                Starts: 29 Oct, 2022 - Ends: 30 Jun, 2023{" "}
              </span>{" "}
              <span className="edit">
                <EditIcon />
              </span>
            </p>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default SessionEdit;
