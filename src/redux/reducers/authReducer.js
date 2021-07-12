const SET_AUTH = "SET_AUTH"
const SIGNUP_AUTH = "SIGNUP_AUTH"
const ADD_USER = "ADD_USER"
const CLEAR_MESSAGE = "CLEAR_MESSAGE"

const initialState = {
    isAuth:false,
    email:null,
    id:null,
    message:"",
    data:{}
}

export default function authReducer (state = initialState, action) {

    switch (action.type){

        case SET_AUTH:

            return {
                ...state,
                isAuth: action.payload.isAuth,
                email: action.payload.email,
                id: action.payload.id,
                data: action.payload.data
            }
        case SIGNUP_AUTH:

            return {
                ...state,
                isAuth: action.payload.isAuth,
                email: action.payload.email,
                password: action.payload.password,
                data: action.payload.data
            }

        case ADD_USER:
            return {
                ...state,
                message: action.payload.message,
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                message: "",
            }

        default:
            return state

    }

}

export const setAuth = (isAuth, email,id, data) => ({type: SET_AUTH, payload: {isAuth,email,id,data}})
export const signUpAuth = (isAuth, email,password, data) => ({type: SIGNUP_AUTH, payload: {isAuth,email,password,data}})
export const addUser = (message) => ({type: ADD_USER, payload: {message}})
export const clearMessage = () => ({type: CLEAR_MESSAGE, payload: {}})
