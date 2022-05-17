import {setIsFetchingAC, setUserProfileAC} from "./action-creators";
import {usersAPI} from "../../api/api";
import {AppThunk} from "../redux-store";

export const getUserProfileTC  = (userId: string | number) => {
    return (dispatch: AppThunk) => {
        dispatch(setIsFetchingAC(true))
        usersAPI.getProfile(userId)
            .then(res => {
                dispatch(setIsFetchingAC(false))
                dispatch(setUserProfileAC(res.data))
            })
    }
}