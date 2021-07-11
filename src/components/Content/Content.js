import React from 'react'
import {useRoutes} from "../../hooks/routes";
import {useSelector} from "react-redux";

const Content = () => {

    const {isAuth} = useSelector(state=>state.auth)
    const routes = useRoutes(isAuth)

    return (
        <div>
            {routes}
        </div>

     )
}

export default Content