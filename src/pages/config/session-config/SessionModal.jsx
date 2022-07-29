import React from "react";
import { InputField } from "../../../components/inputfield/InputField";
import BasicModal from "../../../components/modal/Modal";

export default function SessionModal({
  show,
  handleClose,
  handleShow,
  inputValue,
  handleChange,
}) {
  return (
    <BasicModal
      show={show}
      handleShow={handleShow}
      handleClose={handleClose}
      title="Add session date"
    >
      <div className="row">
        {" "}
        <InputField
          label="Start Date"
          type="date"
          name="startDate"
          value={inputValue.startDate}
          onChange={handleChange}
          // error={error.schoolName}
          className="col-lg-6"
          inputMargin={3}
          require={true}
        />
        <InputField
          label="End Date"
          type="date"
          name="endDate"
          value={inputValue.endDate}
          onChange={handleChange}
          // error={error.schoolName}
          className="col-lg-6"
          inputMargin={3}
          require={true}
        />
      </div>
      <button className="btn btn-primary btn-sm" onClick={handleClose}>
        finish
      </button>
    </BasicModal>
  );
}
