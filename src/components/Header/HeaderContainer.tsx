import React, {useEffect} from 'react';
import Header from "./Header";
import {setIsFetchingAC} from "../../redux/users-reducer/action-creators";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setAuthUserDataAC} from "../../redux/auth-reducer/action-creators";
import {authAPI} from "../../api/api";
import {getAuthUserDataTC} from "../../redux/auth-reducer/thunk-creators";

const HeaderContainer: React.FC = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)

    useEffect(() => {
        dispatch(getAuthUserDataTC())
        // dispatch(setIsFetchingAC(true))
        // authAPI.getMe()
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //             dispatch(setAuthUserDataAC(res.data.data))
        //         }
        //     })
        //     .catch((err) => {
        //         console.warn(err)
        //     })
    }, [])

    return (
        <Header isAuth={isAuth} login={login}/>
    );
};

export default HeaderContainer;