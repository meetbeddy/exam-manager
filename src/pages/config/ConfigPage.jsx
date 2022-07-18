import React from "react";
import SchoolDetailsEdit from "./school-detail-section/SchoolDetailsEdit";
import SessionEdit from "./SessionEdit";
import SessionExamEdit from "./SessionExamEdit";
import SubjectEdit from "./SubjectEdit";
import ClassRoomEdit from "./ClassRoomEdit";
import SchoolDetails from "./school-detail-section/SchoolDetails";

function ConfigPage() {
  const [switchView, setView] = React.useState({
    schoolDetails: false,
    session: false,
  });

  const handleSwitch = (e) => {
    setView({
      ...switchView,
      [e.target.name]: !switchView[`${e.target.name}`],
    });
  };

  console.log(switchView.schoolDetails);
  return (
    <>
      {switchView.schoolDetails ? (
        <SchoolDetailsEdit handleSwitch={handleSwitch} />
      ) : (
        <SchoolDetails handleSwitch={handleSwitch} />
      )}
      <SessionEdit />
      <SessionExamEdit />
      <SubjectEdit />
      <ClassRoomEdit />
    </>
  );
}

export default ConfigPage;
