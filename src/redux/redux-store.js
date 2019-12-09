import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer

});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;