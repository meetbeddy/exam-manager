import React from "react";
import { Card } from "react-bootstrap";
import { SwitchButton } from "../../../../components/buttons/buttons";

function ProfileCard({ profile, userType }) {
  return (
    <Card>
      <div className="card-body">
        <div className="row d-flex align-items-start  ">
          <div className="col-md-6 col-sm-12">
            <div className=" d-flex">
              <img
                src="../assets/img/avatars/1.png"
                alt="user-avatar"
                className="d-block rounded"
                height={100}
                width={100}
                id="uploadedAvatar"
              />
              <div className="ms-2">
                <h5 className="m-0">{profile?.name}</h5>
                <p className="text-lowercase">
                  {profile?.gender} {userType}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12  mt-2">
            <div className="float-end d-flex">
              <p className="fs-6 lh-1 me-1">can view report sheet</p>
              <SwitchButton
                className="m-0"
                id="offerFirstTerm"
                inputType="checkbox"
                disable={true}
                label=""
                //   checked={session.offerFirstTerm}
                type="primary"
                //   handleChange={handleChange}
              />

              <button
                className="btn btn-primary btn-sm ms-1"
                name="session"
                onClick={(e) => {}}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-3 text-wrap">
          <div className="col-md-4 col-sm-12 border-end">
            <p className="fw-semibold">Contact</p>

            <ul className="list-unstyled mb-4 mt-3">
              <li className="d-flex align-items-center mb-1">
                <span className="fw-semibold">Phone:</span>{" "}
                <span className="ps-2 pt-1">{profile?.phone}</span>
              </li>
              <li className="d-flex align-items-center  mb-1">
                <span className="fw-semibold text-wrap">Email:</span>
                {"   "}
                <span className="ps-2 pt-1">{profile?.email}</span>
              </li>
              <li className="d-flex align-items-center mb-1">
                <span className="fw-semibold ">Parent Phone:</span>{" "}
                <span className="ps-2 pt-1">{profile?.parent_phone}</span>
              </li>
              <li className="d-flex align-items-center mb-1">
                <span className="fw-semibold ">Parent Email:</span>{" "}
                <span className="ps-2 pt-1">{profile?.parent_email}</span>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 border-end">
            <p className="fw-semibold">Information</p>

            {userType === "student" ? (
              <ul className="list-unstyled mb-4 mt-3">
                <li className="d-flex align-items-center mb-1">
                  <span className="fw-semibold ">Enrollment No:</span>{" "}
                  <span className="ps-2 pt-1">
                    {profile?.enrollment_number}
                  </span>
                </li>
                <li className="d-flex align-items-center mb-1">
                  <span className="fw-semibold ">Class:</span>{" "}
                  <span className="ps-2 pt-1">{`${profile?.student_class?.level}  ${profile?.student_class?.number}`}</span>
                </li>
                <li className="d-flex align-items-center mb-1 ">
                  <span className="fw-semibold ">Section:</span>{" "}
                  <span className="ps-2 pt-1">
                    {profile?.student_class?.denomination}
                  </span>
                </li>
                <li className="d-flex align-items-center mb-1">
                  <span className="fw-semibold ">State of Origin:</span>{" "}
                  <span className="ps-2 pt-1">{profile?.state_of_origin}</span>
                </li>
                <li className="d-flex align-items-center mb-1">
                  <span className="fw-semibold ">Nationality:</span>{" "}
                  <span className="ps-2 pt-1">{profile?.nationality}</span>
                </li>
                <li className="d-flex align-items-center mb-1">
                  <span className="fw-semibold ">Religion:</span>{" "}
                  <span className="ps-2 pt-1">{profile?.religion}</span>
                </li>
              </ul>
            ) : (
              <ul>
                <li className="d-flex align-items-center mb-1">
                  <span className="fw-semibold ">Class teacher:</span>{" "}
                  <span className="ps-2 pt-1">
                    {profile?.is_class_teacher ? "Yes" : "No"}
                  </span>
                </li>
                <li className="d-flex align-items-center mb-1">
                  <span className="fw-semibold ">Nationality:</span>{" "}
                  <span className="ps-2 pt-1">{profile?.country}</span>
                </li>
                <li className="d-flex align-items-center mb-1">
                  <span className="fw-semibold ">Religion:</span>{" "}
                  <span className="ps-2 pt-1">{profile?.religion}</span>
                </li>
              </ul>
            )}
          </div>
          <div className="col-md-4 col-sm-12">
            <p className="fw-semibold">Subject Offered</p>
            <ul>
              {profile?.subjects_offered?.map((subject) => {
                return (
                  <li className="d-flex align-items-center mb-1" key={subject}>
                    <span className="ps-2 pt-1">{subject.name}</span>
                  </li>
                );
              })}
            </ul>

            <ul className="list-unstyled mb-4 mt-3"></ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
