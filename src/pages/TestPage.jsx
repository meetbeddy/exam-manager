import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import styled from "styled-components";
import { LargeButton, MedButton } from "../components/buttons/buttons";

const Div = styled.div`
  margin: 90px 10px 0px;

  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent !important;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 22px -9px rgba(0, 0, 0, 0.25);
  .card-header {
    bottom-border: 1px solid #ebe9f1;
    background-color: #fff;
  }

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    margin: auto;
    color: #5e5873;
  }
  .badge {
    height: 135.5314483642578px;
    width: 135.5314483642578px;
    border-radius: 10px;
  }
`;

function TestPage() {
  return (
    <Div className="card">
      <div className="card-header">
        <Row>
          <div className="col-lg-7">
            <p>School - Details</p>
          </div>
          <div className="col-lg-5">
            <LargeButton className="btn btn-danger" color="#CE4040">
              Discard Entries
              <span className="btn-label">
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1426 18.3594H2.14258C1.61215 18.3594 1.10344 18.1487 0.728364 17.7736C0.353292 17.3985 0.142578 16.8898 0.142578 16.3594V2.35938C0.142578 1.82894 0.353292 1.32023 0.728364 0.945161C1.10344 0.570089 1.61215 0.359375 2.14258 0.359375H18.1426C18.673 0.359375 19.1817 0.570089 19.5568 0.945161C19.9319 1.32023 20.1426 1.82894 20.1426 2.35938V16.3594C20.1426 16.8898 19.9319 17.3985 19.5568 17.7736C19.1817 18.1487 18.673 18.3594 18.1426 18.3594ZM2.14258 4.35938V16.3594H18.1426V4.35938H2.14258ZM7.84858 14.0674L6.43558 12.6524L8.72858 10.3594L6.43558 8.06637L7.84958 6.65238L10.1426 8.94538L12.4356 6.65238L13.8496 8.06637L11.5566 10.3594L13.8496 12.6524L12.4366 14.0654L10.1426 11.7734L7.84958 14.0664L7.84858 14.0674Z"
                    fill="white"
                  />
                </svg>
              </span>
            </LargeButton>

            <LargeButton className="btn btn-success" color={`#28C76F`}>
              Save Entries
              <span>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6465 10.1965C11.1465 9.70648 10.4265 9.39648 9.64648 9.39648C8.93995 9.39661 8.2562 9.64642 7.716 10.1018C7.1758 10.5572 6.81392 11.1888 6.69427 11.8851C6.57463 12.5815 6.70492 13.2977 7.06214 13.9072C7.41936 14.5168 7.98052 14.9805 8.64648 15.2165C8.67999 14.194 8.9729 13.1969 9.49768 12.3188C10.0225 11.4406 10.7619 10.7103 11.6465 10.1965ZM8.73648 16.3965H2.64648V2.39648H13.8165L16.6465 5.22648V9.74648C17.3965 10.0065 18.0665 10.3965 18.6465 10.9365V4.39648L14.6465 0.396484H2.64648C2.11605 0.396484 1.60734 0.607198 1.23227 0.982271C0.857198 1.35734 0.646484 1.86605 0.646484 2.39648V16.3965C0.646484 16.9269 0.857198 17.4356 1.23227 17.8107C1.60734 18.1858 2.11605 18.3965 2.64648 18.3965H9.45648C9.10648 17.7865 8.85648 17.1165 8.73648 16.3965ZM3.64648 7.39648H12.6465V3.39648H3.64648V7.39648ZM13.3965 18.3965L10.6465 15.3965L11.8065 14.2365L13.3965 15.8265L16.9865 12.2365L18.1465 13.6465L13.3965 18.3965Z"
                    fill="white"
                  />
                </svg>
              </span>
            </LargeButton>
          </div>
        </Row>
      </div>
      <div className="card-body">
        <Row>
          <div className="badge col-lg-3">
            <img src="../assets/img/school-logo-2.png" alt="school-logo" />
          </div>
          <div className="col-lg-8">
            <MedButton className="btn btn-warning" color="#F2994A">
              Upload
            </MedButton>
            <MedButton className="btn btn-light btn-outline">Reset</MedButton>
          </div>
        </Row>
      </div>
    </Div>
  );
}

export default TestPage;
