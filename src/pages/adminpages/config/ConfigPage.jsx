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
import { useSelector } from "react-redux";

function ConfigPage() {
  const { configs } = useSelector((state) => state.config);

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

  console.log(configs);

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
          defaultDetail={configs}
        />
      ) : (
        <SchoolDetails handleSwitch={handleSwitch} defaultDetail={configs} />
      )}
      {/* <SessionEdit /> */}
      {switchView.session ? (
        <SessionEdit handleSwitch={handleSwitch} data={sessionData} />
      ) : (
        <Session handleSwitch={handleSwitch} />
      )}
      {/* <SessionExamEdit /> */}
      {switchView.subjects ? (
        <SubjectEdit handleSwitch={handleSwitch} configs={configs} />
      ) : (
        <SubjectConfig handleSwitch={handleSwitch} configs={configs} />
      )}

      {switchView.classroom ? (
        <ClassRoomEdit handleSwitch={handleSwitch} configs={configs} />
      ) : (
        <ClassRoom handleSwitch={handleSwitch} configs={configs} />
      )}
      {switchView.grading ? (
        <GradingEdits handleSwitch={handleSwitch} configs={configs} />
      ) : (
        <GradingConfig handleSwitch={handleSwitch} configs={configs} />
      )}
      {switchView.promotion ? (
        <PromotionEdit handleSwitch={handleSwitch} configs={configs} />
      ) : (
        <PromotionConfig handleSwitch={handleSwitch} configs={configs} />
      )}
    </>
  );
}

export default ConfigPage;
