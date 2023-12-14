import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";

const rootReducer: any = combineReducers({
  user: userReducer,
});

export default rootReducer;
