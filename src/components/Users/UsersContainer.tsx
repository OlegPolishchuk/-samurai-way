import Users from "./Users";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import React, {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import {setCurrentPageAC} from "../../redux/users-reducer/action-creators";
import {followTC, getUsersTC, unFollowTC} from "../../redux/users-reducer/thunk-creators";


const UsersContainer = () => {
    const usersPage = useAppSelector(state => state.usersPage)
    const {pageSize, currentPage, isFetching, followingInProgress} = usersPage

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [currentPage, pageSize])


    const follow = (userId: string) => {
        dispatch(followTC(userId))
    }

    const unFollow = (userId: string) => {
        dispatch(unFollowTC(userId))
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