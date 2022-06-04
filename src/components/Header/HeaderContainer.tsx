import React, {useEffect} from 'react';
import Header from "./Header";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer/thunk-creators";

const HeaderContainer: React.FC = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)

    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, [])

    const logout = () => {
        dispatch(logoutTC())
    }

    return (
        <Header isAuth={isAuth} login={login} logoutCallback={logout}/>
    );
};

export default HeaderContainer;