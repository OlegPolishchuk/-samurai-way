import Users from "./Users";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import React, {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalCountAC,
    setUsersAC, toggleIsFollowingProgress,
    unFollowAC
} from "../../redux/users-reducer/action-creators";
import {UserType} from "../../redux/users-reducer/users-reducer";
import {usersAPI} from "../../api/api";


const UsersContainer = () => {
    const usersPage = useAppSelector(state => state.usersPage)
    const {pageSize, currentPage, isFetching, followingInProgress} = usersPage

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

    const unFollow = (userId: string) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI
            .unfollow(userId)
            .then(res => {
                dispatch(unFollowAC(userId))
                dispatch(toggleIsFollowingProgress(false, userId))
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
                followingInProgress={followingInProgress}
                follow={follow}
                setCurrentPage={setCurrentPage}
                unFollow={unFollow}
            />
        </>
    )
}


export default UsersContainer