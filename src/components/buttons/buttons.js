import React from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import "./button.css";
import { ArrowDownIcon, LockIcon, OpenLockIcon } from "../icons/icons";

export const AsideButton = styled.li`
  position: relative;
  width: 238.66px;
  height: 84.96px;
  margin: 5px 0px;
  box-shadow: 0px 4px 22px -9px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  background: white;
  font-family: "Montserrat";
  font-style: bold;
  font-weight: 500;
  font-size: 31px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  color: #757575;

  p {
    width: fit-content;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    position: absolute;
    left: 200px;
    right: 0;
    top: 0;
    bottom: 80px;
  }
`;

export const LargeButton = styled.button`
  height: 2.313em;
  width: auto;
  border-radius: 5px;
  padding: 10px, 22px, 10px, 22px;
  // background-color: ${(props) => props.color || "#fff"};
  // color: #fff;
  margin: 8px;
  font-family: font-family: Montserrat;
  font-size: ${(props) => props.fontSize || "18px"};
  line-height: ${(props) => props.lineHeight || "21px"};
  font-style: normal;
  font-weight: 500;

  text-align: center;
  letter-spacing: 0.4px;
  span {
    margin: 8px;
   
  }
`;

export const TagButton = styled.div`
  position: relative;
  height: 24px;
  width: 67px;
  background: #f8b25f;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #000;
  text-align: left !important;
  .icon {
    position: absolute;
    right: 5px;
    cursor: pointer;
  }
`;
export const MedButton = styled.button`
  height: 29px;
  width: auto;
  border-radius: 5px;
  margin: 5px;
  padding: 8px 19px 8px 19px;
  // background-color: ${(props) => props.color || "#fff"};
  // border: ${(props) => `1px solid ${props.border}` || "#fff"};
  // color: ${(props) => props.border || "#fff"};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.366667px;
`;

export function SwitchButton({
  id,
  label,
  checked,
  type,
  handleChange,
  inputType,
  name,
  value,
  disable,
}) {
  return (
    <ol className="switches">
      <li>
        <input
          type={inputType}
          name={name}
          id={id}
          checked={checked}
          value={value}
          onChange={(e) => handleChange(e)}
          className={type}
          disabled={disable}
        />
        <label htmlFor={id}>
          <span></span>
        </label>
        {label}
      </li>
    </ol>
  );
}

export const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#0"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="border-1"
    style={{ color: "#4F4F4F", fontSize: "12px", lineHeight: "24px" }}
  >
    {/* Render custom icon here */}
    {children === "Editing Prevented" ? <LockIcon /> : <OpenLockIcon />}
    {"  "}
    {children} <ArrowDownIcon />
  </a>
));

export const MyToggle = () => {
  const [selected, setSelected] = React.useState("Can Edit Result");

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {selected}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          eventKey="1"
          onClick={(e) => setSelected(e.target.name)}
          name="Can Edit Result"
        >
          Open Edit Result
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          name="Editing Prevented"
          onClick={(e) => setSelected(e.target.name)}
        >
          Lock Edit Result
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
