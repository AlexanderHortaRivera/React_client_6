import authReducer from "./reducers/authReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import snackbarReducer from "./reducers/snackbarReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))