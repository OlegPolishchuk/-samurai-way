import {connect} from "react-redux";
import Users from "./Users";
import {AppDispatchType, RootStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";

type MapStateToPropsType = {
    users: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.users
    }
}

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer