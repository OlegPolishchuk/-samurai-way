import {AppThunk} from "../redux-store";
import {setIsFetchingAC} from "../users-reducer/action-creators";
import {authAPI, userLoginDataType} from "../../api/api";
import {setAuthUserDataAC, setLoginErrorsAC} from "./action-creators";

export  const getAuthUserDataTC = () => {
    return (dispatch: AppThunk) => {
        dispatch(setIsFetchingAC(true))
        authAPI.getMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(res.data.data))
                }
            })
            .catch((err) => {
                console.warn(err)
            })
    }
}


export const loginTC = (loginFormUserData: userLoginDataType) => (dispatch: AppThunk) => {
    authAPI.login(loginFormUserData)
        .then(res => {
            console.log(res.data)
            if(res.data.resultCode === 1) {
                dispatch(setLoginErrorsAC(res.data.fieldsErrors))
            } else {
                dispatch(getAuthUserDataTC())
            }
        })
        .catch(err => console.warn(err))

}

export const logoutTC = () => (dispatch: AppThunk) => {
    authAPI.logout()
        .then(res => res)
}