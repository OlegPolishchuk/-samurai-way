import Users from "./Users";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import axios from "axios";
import {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import {
    followAC, setCurrentPageAC,
    setIsFetchingAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer/action-creators";
import {UserType} from "../../redux/users-reducer/users-reducer";


const UsersContainer = () => {
    const usersPage = useAppSelector(state => state.usersPage)
    const {pageSize, currentPage, isFetching} = usersPage

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setIsFetchingAC(true))
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                dispatch(setIsFetchingAC(false))
                setUsers(res.data.items)
                setTotalCount(res.data.totalCount)
            })
    }, [currentPage, pageSize])




    const follow = (userId: string) => {
        dispatch(followAC(userId))
    }

    const unFollow = (userId: string) => {
        dispatch(unFollowAC(userId))
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