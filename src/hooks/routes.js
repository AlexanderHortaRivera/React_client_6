import {Route, Switch, Redirect} from "react-router-dom";
import Profile from "../components/Content/Profile/Profile";
import Login from "../components/Content/Login/Login";
import Signup from "../components/Content/Signup/Signup";
import React from "react";


export const useRoutes = isAuth => {

    if (isAuth) {
        return (
            <Switch>
                <Route exact path='/profile' component={Profile}/>
                <Redirect to="/profile"/>
             </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Redirect to="/login"/>
        </Switch>
    )

}