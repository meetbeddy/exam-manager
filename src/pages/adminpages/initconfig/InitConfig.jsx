import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ClassRoomEdit from "../config/classroom-config/ClassRoomEdit";
import SchoolDetailsEdit from "../config/school-detail-section/SchoolDetailsEdit";
import SessionEdit from "../config/session-config/SessionEdit";
import SubjectEdit from "../config/subject-config/SubjectEdit";
import withSplashScreen from "./withSplashScreen";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../../store/actions/notificationsActions";
import { fetchschooldetails } from "../../../store/actions/adminActions";
import GradingEdits from "../config/grading-config/GradingEdits";
import PromotionEdit from "../config/promotion-config/PromotionEdit";
import { useNavigate } from "react-router-dom";
import { schoolId } from "../../../store/api";

const defaultDetail = {
  schoolName: "Enginx Connect Nursery and Primary School",
  mobileNumber: "90xxxxxxxxx",
  state: "Lagos",
  email: "info@enginx.com",
  address: "7B, Adekula fajuyi , Ikeja GRA, Lagos",
  zipCode: "77738",
};
function InitConfig() {
  const navigate = useNavigate();
  const sessionData = { type: "new", info: {} };
  const [switchView, setView] = React.useState({
    schoolDetails: true,
    classroom: false,
    subjects: false,
    session: false,
    promotion: false,
    grading: false,
  });
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (notification?.success?.message || notification?.success?.status) {
      toast.success("successful");
      dispatch(fetchschooldetails());
      if (
        (notification?.success?.message || notification?.success?.status) &&
        switchView.grading === true
      ) {
        navigate(`../${schoolId}/dashboard/config`, { replace: true });
      }
    }

    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
    }
    dispatch(clearNotifications());
  }, [
    dispatch,
    navigate,
    notification?.errors,
    notification?.success?.message,
    notification?.success?.status,
    switchView.grading,
  ]);

  const { configs } = useSelector((state) => state.config);

  const handleSwitch = (e) => {
    if (e === "schoolDetails")
      setView({
        ...switchView,
        schoolDetails: false,
        session: true,
      });
    if (e === "session")
      setView({
        ...switchView,
        session: false,
        classroom: true,
      });
    if (e === "classroom")
      setView({
        ...switchView,
        classroom: false,
        subjects: true,
      });
    if (e === "subjects")
      setView({
        ...switchView,
        subjects: false,
        promotion: true,
      });
    if (e === "promotion")
      setView({
        ...switchView,
        promotion: false,
        grading: true,
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
          {switchView.session && (
            <SessionEdit handleSwitch={handleSwitch} data={sessionData} />
          )}

          {switchView.classroom && (
            <ClassRoomEdit handleSwitch={handleSwitch} configs={configs} />
          )}
          {switchView.subjects && <SubjectEdit handleSwitch={handleSwitch} />}
          {switchView.examination && (
            <SessionEdit handleSwitch={handleSwitch} />
          )}
          {switchView.grading && <GradingEdits handleSwitch={handleSwitch} />}
          {switchView.promotion && (
            <PromotionEdit handleSwitch={handleSwitch} />
          )}
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default withSplashScreen(InitConfig);
