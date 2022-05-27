import {setIsFetchingAC, setUserProfileAC, setUserStatusAC} from "./action-creators";
import {profileAPI, usersAPI} from "../../api/api";
import {AppThunk} from "../redux-store";

export const getUserProfileTC  = (userId: string | number) => {
    return (dispatch: AppThunk) => {
        dispatch(setIsFetchingAC(true))
        usersAPI.getProfile(userId)
            .then(res => {
                dispatch(setUserProfileAC(res.data))
            })
            .then(() => {
                return profileAPI.getStatus(userId)
            })
            .then(res => {
                dispatch(setUserStatusAC(String(res.data)))
            })
            .finally(() => {
                dispatch(setIsFetchingAC(false))
            })
    }
}


export const updateUserStatusTC = (status: string) => {
    return (dispatch: AppThunk) => {
        profileAPI.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}