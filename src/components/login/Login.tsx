import {Form, Formik, Field, FormikHelpers} from 'formik';
import React from 'react';
import LoginForm from "./loginForm/LoginForm";


export type FormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const Login = () => {
    const onSubmit = (values: FormValuesType,) => {
        console.log(`values => ${JSON.stringify(values)} `)
        console.dir(values)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;