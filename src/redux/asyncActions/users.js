import {addUser} from "../reducers/authReducer";

export const fetchUsers = (body) => {
    return async dispatch => {

        const response = await fetch('http://localhost:5000/api/auth/register', {method:'POST', body, headers:[]})
        const json = await response.json()

        return dispatch(addUser(json.message))

    }
}