import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer

});


const store = createStore(reducers);

window.store = store;

export default store;