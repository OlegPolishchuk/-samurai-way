import React from 'react';
import {Formik, Field, Form} from "formik";
import {FormValuesType} from "../Login";
import s from './LoginForm.module.css'

type PropsType = {
    onSubmit: (values: FormValuesType) => void
}

function validateField(value: string) {
    let error = ''

    if (!value) {
        error = 'Required'
    }

    return error
}

const LoginForm: React.ComponentType<PropsType> = (props) => {

    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
                rememberMe: false
            }}
            // onSubmit={(values: FormValuesType, {setSubmitting}: FormikHelpers<FormValuesType>) => onSubmit(values, setSubmitting)}
            onSubmit={values => props.onSubmit(values)}
        >
            {({errors, touched, isValidating}) => (
                <Form className={s.loginForm}>
                    <label>
                        <Field name={'login'} placeholder={'login'} validate={validateField}/>
                        {errors.login && touched.login && <div className={s.error}>{errors.login}</div>}
                    </label>
                    <label>
                        <Field name={'password'} placeholder={'password'} validate={validateField}/>
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