import {AppThunk} from "../redux-store";
import {setIsFetchingAC} from "../users-reducer/action-creators";
import {authAPI} from "../../api/api";
import {setAuthUserDataAC} from "./action-creators";

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