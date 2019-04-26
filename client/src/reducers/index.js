import { combineReducers } from "redux";
import memberReducer from "./memberReducer";
import masterReducer from "./masterclassReducer";
import applicationReducer from "./applicationReducer";
import taskReducer from "./taskReducer";
import partnerReducer from "./partnerReducer";
import consultantReducer from "./consultantReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import organizationReducer from "./organizationReducer.js";
import adminReducer from "./adminReducer";

export default combineReducers({
  member: memberReducer,
  master: masterReducer,
  application: applicationReducer,
  task: taskReducer,
  partner: partnerReducer,
  consultant: consultantReducer,
  auth: authReducer,
  errors: errorReducer,
  organization: organizationReducer,
  admin: adminReducer
});
