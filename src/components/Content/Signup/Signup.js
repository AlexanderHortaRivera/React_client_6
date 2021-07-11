import React from 'react'
import {
    Button,
    Container,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import * as yup from "yup";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../redux/asyncActions/users";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    repeatpassword: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    fio: yup
        .string('Enter your email')
        .required('Email is required'),


});


const Signup = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const message = useSelector(state => state.message)


    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
            repeatpassword:'',
            fio:''
        },
        validationSchema,
        onSubmit: (values)=>{

            // добавляем асинхронно пользователя в базу через thunk
            dispatch(fetchUsers({email:values.email, password: values.password, fio: values.fio}))

        }

    })


    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    {message}
                </Typography>
                <Typography component="h1" variant="h5">
                    SIGN UP AS A STUDENT
                </Typography>

                <form className={classes.form} onSubmit={formik.handleSubmit}>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="repeatpassword"
                        label="Repeat password"
                        type="password"
                        id="repeatpassword"
                        autoComplete="current-password"
                        value={formik.values.repeatpassword}
                        onChange={formik.handleChange}
                        error={formik.touched.repeatpassword && Boolean(formik.errors.repeatpassword)}
                        helperText={formik.touched.repeatpassword && formik.errors.repeatpassword}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="fio"
                        label="FIO"
                        name="fio"
                        value={formik.values.fio}
                        onChange={formik.handleChange}
                        error={formik.touched.fio && Boolean(formik.errors.fio)}
                        helperText={formik.touched.fio && formik.errors.fio}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        ENTER
                    </Button>
                </form>

            </div>
        </Container>
    )
}

export default Signup