import {AppThunk} from "../redux-store";
import {
    followAC,
    setIsFetchingAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFollowingProgress,
    unFollowAC
} from "./action-creators";
import {usersAPI} from "../../api/api";


export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: AppThunk) => {
        dispatch(setIsFetchingAC(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalCountAC(data.totalCount))
            })
            .catch(err => console.warn(err))
    }
}

export const followTC = (userId: string) => {
    return (dispatch: AppThunk) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI
            .follow(userId, {})
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(userId))
                    dispatch(toggleIsFollowingProgress(false, userId))
                }
            })
            .catch(err => console.warn(err))
    }
}

export const unFollowTC = (userId: string) => {
    return (dispatch: AppThunk) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI
            .unfollow(userId)
            .then(() => {
                dispatch(unFollowAC(userId))
                dispatch(toggleIsFollowingProgress(false, userId))
            })
            .catch(err => console.warn(err))
    }
}