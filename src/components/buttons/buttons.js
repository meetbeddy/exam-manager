import styled from "styled-components";

export const AsideButton = styled.li`
  position: relative;
  width: 238.66px;
  height: 84.96px;
  margin: 5px 0px;
  box-shadow: 0px 4px 22px -9px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  background: white;
  font-family: "Roboto";
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
  background-color: ${(props) => props.color || "#fff"};
  color: #fff;
  margin: 8px;
  font-family: ${(props) => props.fontFamily || "Roboto"};
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

export const MedButton = styled.button`
  height: 29px;
  width: auto;
  border-radius: 5px;
  margin: 5px;
  padding: 8px 19px 8px 19px;
  background-color: ${(props) => props.color || "#fff"};
  border: ${(props) => `1px solid ${props.border}` || "#fff"};
  color: ${(props) => props.border || "#fff"};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.366667px;
`;

export const ToggleSwitchButton = styled.ol`
  max-width: 500px;
  width: 95%;
  margin: 50px auto 0;
  border-radius: 5px;
  color: #e8e9ed;
  background: #18172c;
  list-style: none;
  label {
    cursor: pointer;
  }

  [type="checkbox"] {
    position: absolute;
    left: -9999px;
  }

  .switches li {
    position: relative;
    counter-increment: switchCounter;
  }

  .switches li:not(:last-child) {
    border-bottom: 1px solid var(--gray);
  }

  .switches li::before {
    content: counter(switchCounter);
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    font-size: 2rem;
    font-weight: bold;
    color: var(--pink);
  }

  .switches label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  .switches span:last-child {
    position: relative;
    width: 50px;
    height: 26px;
    border-radius: 15px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
    background: var(--gray);
    transition: all 0.3s;
  }

  .switches span:last-child::before,
  .switches span:last-child::after {
    content: "";
    position: absolute;
  }

  .switches span:last-child::before {
    left: 1px;
    top: 1px;
    width: 24px;
    height: 24px;
    background: var(--white);
    border-radius: 50%;
    z-index: 1;
    transition: transform 0.3s;
  }

  .switches span:last-child::after {
    top: 50%;
    right: 8px;
    width: 12px;
    height: 12px;
    transform: translateY(-50%);
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/uncheck-switcher.svg);
    background-size: 12px 12px;
  }

  .switches [type="checkbox"]:checked + label span:last-child {
    background: var(--green);
  }

  .switches [type="checkbox"]:checked + label span:last-child::before {
    transform: translateX(24px);
  }

  .switches [type="checkbox"]:checked + label span:last-child::after {
    width: 14px;
    height: 14px;
    /*right: auto;*/
    left: 8px;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/checkmark-switcher.svg);
    background-size: 14px 14px;
  }

  @media screen and (max-width: 600px) {
    .switches li::before {
      display: none;
    }
  }
`;
