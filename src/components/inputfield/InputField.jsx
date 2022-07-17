import React from "react";
import { Form } from "react-bootstrap";
import "../../pages/test.css";
import { ArrowDownIcon } from "../icons/icons";

export function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  error,
  require,
  handleShow,
  inputMargin,
  showPass,
  read,
}) {
  return (
    <>
      <Form.Group controlId={`formBasic${name}`} className={className}>
        <Form.Label className="mb-0"> {label}</Form.Label>
        <Form.Control
          className={`mb-${inputMargin} p-2`}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          isInvalid={!!error}
          required={require}
          readOnly={read}
        />

        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export function CustomSelect({ selected, options, handleSelected }) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="select-wrapper">
      <div className="select-btn" onClick={() => setShow(!show)}>
        <p>{selected ? selected : options[0]}</p>{" "}
        <span>
          {" "}
          <ArrowDownIcon />
        </span>
      </div>
      {show && (
        <div className="content">
          <ul className="options">
            {options.map((option, i) => (
              <li
                key={i}
                onClick={(e) => {
                  handleSelected(e.target.id);
                  setShow(false);
                }}
                id={option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export const RowBox = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <p>
          1st term examination{" "}
          <i>Report submission - Active - 5 class remaining</i> <span></span>
        </p>
      </div>
    </div>
  );
};
