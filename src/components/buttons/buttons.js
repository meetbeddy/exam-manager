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
