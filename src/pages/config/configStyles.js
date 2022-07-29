import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent !important;
  border-radius: 0.5rem;
  // box-shadow: 0px 4px 22px -9px rgba(0, 0, 0, 0.25);
  color: #6e6b7b !important;
  .card-header {
    border-bottom: 1px solid #ebe9f1 !important;
    background-color: #fff;
    padding: 1rem 1rem;
  }

  .card-body {
    .top {
      backround: #f9f9f9;
    }
  }
  h4 {
    font-family: "Montserrat";
    // font-style: normal;
    // font-weight: 500;
    // font-size: 18px;
    // line-height: 22px;

    margin: auto;
    color: #5e5873;
  }
  p {
    height: 24px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .badge-row,
  .accordion-row {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    .label,
    // .button-row {
    //   width: 50%;
    // }
  }
  .school-badge {
    height: 135.53px;
    width: 135.53px;
    border-radius: 10px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .badge-row-buttons {
    position: absolute;
    left: 160px;
    top: 65px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #6e6b7b;
  }
  .form {
    margin-top: 40px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #6e6b7b;
    input {
      height: 38px;
    }
    placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      color: #b9b9c3;
    }
  }
  .edit {
    cursor: pointer;
  }
`;
