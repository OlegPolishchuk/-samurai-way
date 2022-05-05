import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import axios from "axios";
import {useEffect} from "react";


const UsersContainer = () => {

    const usersPage = useAppSelector(state => state.usersPage)
    const {pageSize, currentPage} = usersPage

    const dispatch = useAppDispatch()

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
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

    return <Users
        usersPage={usersPage}
        follow={follow}
        setCurrentPage={setCurrentPage}
        unFollow={unFollow}
    />
}


export default UsersContainer