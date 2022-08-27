import { combineReducers } from "redux";

import posts from "./posts";
import authReducer from "./auth";
import notificationReducer from "./notificationReducer";
import config from "./config";
import student from "./student";
import teacher from "./teacher";

const appReducer = combineReducers({
  posts,
  auth: authReducer,
  notification: notificationReducer,
  config: config,
  student: student,
  teacher: teacher,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") return appReducer(undefined, action);
  return appReducer(state, action);
};
export default rootReducer;
