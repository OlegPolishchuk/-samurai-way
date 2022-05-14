import React, {useEffect} from 'react';
import Header from "./Header";
import {setIsFetchingAC} from "../../redux/users-reducer/action-creators";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setAuthUserDataAC} from "../../redux/auth-reducer/action-creators";

const HeaderContainer: React.FC = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)

    useEffect(() => {
        dispatch(setIsFetchingAC(true))
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
                {withCredentials: true}
            )
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(res.data.data))
                }
            })
            .catch((err) => {
                console.warn(err)
            })
    }, [])

    return (
        <Header isAuth={isAuth} login={login}/>
    );
};

export default HeaderContainer;