import {Form, Formik, Field, FormikHelpers} from 'formik';
import React from 'react';
import LoginForm from "./loginForm/LoginForm";
import {useDispatch} from "react-redux";
import {loginTC, logoutTC} from "../../redux/auth-reducer/thunk-creators";
import {useAppSelector} from "../../hooks/hooks";


export type FormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const Login = () => {

    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const error = useAppSelector(state => state.auth.error)

    const onSubmit = (values: FormValuesType,) => {
        dispatch(loginTC(values))
    }

    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    console.log(isAuth)
    return (
        <div>
            <h1>Login</h1>
            {isAuth
            ? <button onClick={logoutHandler}>Logout</button>
            : <LoginForm onSubmit={onSubmit}/>
            }
        </div>
    );
};

export default Login;