import {Form, Formik, Field, FormikHelpers} from 'formik';
import React from 'react';
import LoginForm from "./loginForm/LoginForm";
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/auth-reducer/thunk-creators";
import {useAppSelector} from "../../hooks/hooks";


export type FormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const Login = () => {

    const dispatch = useDispatch()
    const error = useAppSelector(state => state.auth.error)

    const onSubmit = (values: FormValuesType,) => {
        dispatch(loginTC(values))
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;