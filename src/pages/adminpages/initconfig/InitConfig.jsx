import React from "react";
import { useSelector } from "react-redux";
import ClassRoomEdit from "../config/classroom-config/ClassRoomEdit";
import SchoolDetailsEdit from "../config/school-detail-section/SchoolDetailsEdit";
import SessionEdit from "../config/session-config/SessionEdit";
import SessionExamEdit from "../config/sessionExam/SessionExamEdit";
import SubjectEdit from "../config/subject-config/SubjectEdit";
import withSplashScreen from "./withSplashScreen";

const defaultDetail = {
  schoolName: "Enginx Connect Nursery and Primary School",
  mobileNumber: "90xxxxxxxxx",
  state: "Lagos",
  email: "info@enginx.com",
  address: "7B, Adekula fajuyi , Ikeja GRA, Lagos",
  zipCode: "77738",
};
function InitConfig() {
  const [switchView, setView] = React.useState({
    schoolDetails: true,
    classroom: false,
    subjects: false,
    examination: false,
    session: false,
  });

  // const { authData } = useSelector((state) => state.auth);

  const handleSwitch = (e) => {
    if (e.target.name === "schoolDetails")
      setView({
        ...switchView,
        schoolDetails: false,
        session: true,
      });
    if (e.target.name === "session")
      setView({
        ...switchView,
        session: false,
        classroom: true,
      });
    if (e.target.name === "classroom")
      setView({
        ...switchView,
        classroom: false,
        subjects: true,
      });
    if (e.target.name === "subjects")
      setView({
        ...switchView,
        subjects: false,
        examination: true,
      });
    if (e.target.name === "examination")
      setView({
        ...switchView,
        examination: false,
        classroom: true,
      });
  };
  return (
    <div className="container-xxl">
      <div className=" authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          {switchView.schoolDetails && (
            <SchoolDetailsEdit
              handleSwitch={handleSwitch}
              defaultDetail={defaultDetail}
            />
          )}
          {switchView.session && <SessionEdit handleSwitch={handleSwitch} />}

          {switchView.classroom && (
            <ClassRoomEdit handleSwitch={handleSwitch} />
          )}
          {switchView.subjects && <SubjectEdit handleSwitch={handleSwitch} />}
          {switchView.examination && (
            <SessionExamEdit handleSwitch={handleSwitch} />
          )}
        </div>
      </div>
    </div>
  );
}

export default withSplashScreen(InitConfig);
