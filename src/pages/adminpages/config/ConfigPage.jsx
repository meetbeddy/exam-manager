import React from "react";
import SchoolDetailsEdit from "./school-detail-section/SchoolDetailsEdit";
import SessionEdit from "./session-config/SessionEdit";
import Session from "./session-config/Session";
import SessionExamEdit from "./sessionExam/SessionExamEdit";
import SubjectEdit from "./subject-config/SubjectEdit";
import ClassRoomEdit from "./classroom-config/ClassRoomEdit";
import SchoolDetails from "./school-detail-section/SchoolDetails";
import ClassRoom from "./classroom-config/ClassRoom";
import SecondaryNav from "../../../components/nav/SecondaryNav";
import { ColorConfigIcon } from "../../../components/icons/icons";
import SubjectConfig from "./subject-config/SubjectConfig";
import GradingEdits from "./grading-config/GradingEdits";
import GradingConfig from "./grading-config/GradingConfig";
import PromotionEdit from "./promotion-config/PromotionEdit";
import PromotionConfig from "./promotion-config/PromotionConfig";

function ConfigPage() {
  const defaultDetail = {
    schoolName: "Enginx Connect Nursery and Primary School",
    mobileNumber: "90xxxxxxxxx",
    state: "Lagos",
    email: "info@enginx.com",
    address: "7B, Adekula fajuyi , Ikeja GRA, Lagos",
    zipCode: "77738",
  };

  const [switchView, setView] = React.useState({
    schoolDetails: false,
    classroom: false,
    subjects: false,
    grading: false,
    session: false,
  });

  const [sessionData, setSessionData] = React.useState({ type: "", info: {} });

  const handleSwitch = (e, data) => {
    setSessionData({ ...sessionData, type: e.target.id, info: data });
    setView({
      ...switchView,
      [e.target.name]: !switchView[`${e.target.name}`],
    });
  };

  return (
    <>
      <SecondaryNav>
        <div className="navbar-brand border p-2 rounded">
          <ColorConfigIcon />
          <span className="ms-2 fw-bold">Config</span>
        </div>

        <div aria-label="breadcrumb" className="align-items-center ">
          <ol className="breadcrumb breadcrumb-style1 m-auto ">
            <li className="breadcrumb-item">
              <a href="#yueuu">
                <i className="bx bx-home text-primary"></i>
              </a>
            </li>
            <li className="breadcrumb-item active text-primary">Config</li>
          </ol>
        </div>
      </SecondaryNav>
      {switchView.schoolDetails ? (
        <SchoolDetailsEdit
          handleSwitch={handleSwitch}
          defaultDetail={defaultDetail}
        />
      ) : (
        <SchoolDetails
          handleSwitch={handleSwitch}
          defaultDetail={defaultDetail}
        />
      )}
      {/* <SessionEdit /> */}
      {switchView.session ? (
        <SessionEdit handleSwitch={handleSwitch} data={sessionData} />
      ) : (
        <Session handleSwitch={handleSwitch} />
      )}
      {/* <SessionExamEdit /> */}
      {switchView.subjects ? (
        <SubjectEdit handleSwitch={handleSwitch} />
      ) : (
        <SubjectConfig handleSwitch={handleSwitch} />
      )}

      {switchView.classroom ? (
        <ClassRoomEdit handleSwitch={handleSwitch} />
      ) : (
        <ClassRoom handleSwitch={handleSwitch} />
      )}
      {switchView.grading ? (
        <GradingEdits handleSwitch={handleSwitch} />
      ) : (
        <GradingConfig handleSwitch={handleSwitch} />
      )}
      {switchView.promotion ? (
        <PromotionEdit handleSwitch={handleSwitch} />
      ) : (
        <PromotionConfig handleSwitch={handleSwitch} />
      )}
    </>
  );
}

export default ConfigPage;
