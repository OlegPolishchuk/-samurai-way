import {AppThunk} from "../redux-store";
import {setIsFetchingAC, setTotalCountAC, setUsersAC} from "./action-creators";
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