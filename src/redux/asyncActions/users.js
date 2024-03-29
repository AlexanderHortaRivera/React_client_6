import {setSnackbarAction} from "../reducers/snackbarReducer";

export const fetchUsers = (body) => {
    return async dispatch => {
        const response = await fetch('http://localhost:5000/api/auth/register', {method:'POST', body, headers:{'Content-Type': 'application/json'}})
        const json = await response.json()

        return dispatch(setSnackbarAction({open:true,message:json.message}))
    }
}