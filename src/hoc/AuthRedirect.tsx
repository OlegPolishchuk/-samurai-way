import React from "react";
import {Redirect} from "react-router-dom";
import {useAppSelector} from "../hooks/hooks";

type PropsType = {
    isAuth: boolean
}

export function withAuthRedirect <T>(Component: React.ComponentType<T>) {


    //  const RedirectComponent = (props: {}) => {
    //
    //     const isAuth = useAppSelector(state => state.auth.isAuth)
    //
    //     if (!isAuth) return <Redirect to={'/login'}/>
    //
    //     return <Component  {...props as T}/>
    // }
    return   (props: {}) => {

        const isAuth = useAppSelector(state => state.auth.isAuth)
        console.log(`isAuth => ${isAuth}`)
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component  {...props as T}/>
    }

    // return RedirectComponent
}


