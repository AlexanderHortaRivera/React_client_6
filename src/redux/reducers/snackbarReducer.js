const SET_SNACKBAR = "SET_SNACKBAR"

const initialState = {
    open:false,
    message:"",
}

export default function snackbarReducer (state = initialState, action) {

    switch (action.type){

        case SET_SNACKBAR:

            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }

}

export const setSnackbarAction = (payload) => ({type: SET_SNACKBAR, payload})
