import React from 'react';
import {Formik, Field, Form} from "formik";
import {FormValuesType} from "../Login";
import s from './LoginForm.module.css'
import {useAppSelector} from "../../../hooks/hooks";

type PropsType = {
    onSubmit: (values: FormValuesType) => void
    error? : string
}

function validateField(value: string) {
    let error = ''

    if (!value) {
        error = 'Required'
    }

    return error
}

const LoginForm: React.ComponentType<PropsType> = (props) => {

    const loginErrors = useAppSelector(state => state.auth.error)

    let emailError: string, passwordError: string;

    loginErrors.forEach(error => {
        if (error.field === 'email') {
            emailError = error.error
        } else {
            passwordError = error.error
        }
    })

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            // onSubmit={(values: FormValuesType, {setSubmitting}: FormikHelpers<FormValuesType>) => onSubmit(values, setSubmitting)}
            onSubmit={values => props.onSubmit(values)}
        >
            {({errors, touched, isValidating}) => (
                <Form className={s.loginForm}>
                    <label>
                        <Field name={'email'} placeholder={'email'} validate={validateField}/>
                        {emailError && <div className={s.error}>{emailError}</div>}
                        {errors.email && touched.email && <div className={s.error}>{errors.email}</div>}
                    </label>
                    <label>
                        <Field name={'password'} placeholder={'password'} validate={validateField}/>
                        {passwordError && <div className={s.error}>{passwordError}</div>}
                        {errors.password && touched.password && <div className={s.error}>{errors.password}</div>}
                    </label>
                    <label>
                        <Field
                            type={'checkbox'}
                            name={'rememberMe'}
                        />
                        Remember me
                    </label>
                    <button type={'submit'}>Login</button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;