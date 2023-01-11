import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReudcer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReudcer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(reducers);

export default store;
