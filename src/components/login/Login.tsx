import {Form, Formik, Field, FormikHelpers} from 'formik';
import React from 'react';
import LoginForm from "./loginForm/LoginForm";
import {useDispatch} from "react-redux";
import {loginTC, logoutTC} from "../../redux/auth-reducer/thunk-creators";
import {useAppSelector} from "../../hooks/hooks";
import {Redirect} from "react-router-dom";


export type FormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const Login = () => {

    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const error = useAppSelector(state => state.auth.error)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    const onSubmit = (values: FormValuesType,) => {
        dispatch(loginTC(values))
    }

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;