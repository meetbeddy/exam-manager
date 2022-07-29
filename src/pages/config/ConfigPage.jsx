import React from "react";
import SchoolDetailsEdit from "./school-detail-section/SchoolDetailsEdit";
import SessionEdit from "./session-config/SessionEdit";
import SessionExamEdit from "./SessionExamEdit";
import SubjectEdit from "./SubjectEdit";
import ClassRoomEdit from "./classroom-config/ClassRoomEdit";
import SchoolDetails from "./school-detail-section/SchoolDetails";
import ClassRoom from "./classroom-config/ClassRoom";

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
  });

  const handleSwitch = (e) => {
    setView({
      ...switchView,
      [e.target.name]: !switchView[`${e.target.name}`],
    });
  };

  return (
    <>
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
      <SessionEdit />
      <SessionExamEdit />
      <SubjectEdit />
      {switchView.classroom ? (
        <ClassRoomEdit handleSwitch={handleSwitch} />
      ) : (
        <ClassRoom handleSwitch={handleSwitch} />
      )}
    </>
  );
}

export default ConfigPage;
