import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import classes from './header.module.css'
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className={classes.root}>

            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>{`PIANO TEACHERS`}</Typography>
                    <Button color="inherit">
                        <NavLink className={classes.nav_link} to="/login">
                            Login
                        </NavLink>
                    </Button>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header