import React from 'react';
import s from './LoginForm.module.css'

const LoginForm = () => {
    return (
        <form className={s.loginForm}>
            <label>
                <input
                type={'text'}
                placeholder={'Login'}
                />
            </label>
            <label>
                <input
                type={'text'}
                placeholder={'Password'}
                />
            </label>
            <label>
                <input
                type={'checkbox'}
                />
                Remember me
            </label>
            <button>Login</button>
        </form>
    );
};

export default LoginForm;