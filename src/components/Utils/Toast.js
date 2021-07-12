import React from "react"
import {Snackbar} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {setSnackbarAction} from "../../redux/reducers/snackbarReducer";

export default () => {

    const dispatch = useDispatch()
    const {open,message} = useSelector(state => state.snackbar)

    // console.log(`Open: ${open} message: ${message}`)

    if(message==="") return null

    const handleOnClose = () => {
        dispatch(setSnackbarAction({open:false, message:''}))
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                onClose={handleOnClose}
                autoHideDuration={4000}
                message={message}
            />
        </>
    )
}