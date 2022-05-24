import React from "react";
import {Redirect} from "react-router-dom";
import {useAppSelector} from "../hooks/hooks";

export function withAuthRedirect <T>(Component: React.ComponentType<T>) {

    return   (props: {}) => {

        const isAuth = useAppSelector(state => state.auth.isAuth)

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component  {...props as T}/>
    }

}


