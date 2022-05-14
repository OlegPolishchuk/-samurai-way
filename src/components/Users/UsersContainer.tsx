import Users from "./Users";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import axios from "axios";
import React, {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import {
    followAC, setCurrentPageAC,
    setIsFetchingAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer/action-creators";
import {UserType} from "../../redux/users-reducer/users-reducer";
import {usersAPI} from "../../api/api";


const UsersContainer = () => {
    const usersPage = useAppSelector(state => state.usersPage)
    const {pageSize, currentPage, isFetching} = usersPage

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setIsFetchingAC(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetchingAC(false))
                setUsers(data.items)
                setTotalCount(data.totalCount)
            })
    }, [currentPage, pageSize])


    const follow = (userId: string) => {
        usersAPI
            .follow(userId, {})
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
            })
            .catch(err => console.warn(err))

    }

    const unFollow = (userId: string) => {
        usersAPI
            .unfollow(userId)
            .then(res => {
                dispatch(unFollowAC(userId))
            })
    }

    const setUsers = (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    }


    const setTotalCount = (totalCount: number) => {
        dispatch(setTotalCountAC(totalCount))
    }

    const setCurrentPage = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    return (
        <>
            {isFetching && <Preloader/>}
            <Users
                usersPage={usersPage}
                follow={follow}
                setCurrentPage={setCurrentPage}
                unFollow={unFollow}
            />
        </>
    )
}


export default UsersContainer