import {
    FollowACType,
    SetCurrentPageACType,
    SetIsFetchingACType,
    SetTotalCountACType,
    SetUsersACType,
    ToggleIdFollowingACType,
    UnFollowACType,
    UserPageActionsTypeEnum
} from "./types";
import {UserType} from "./users-reducer";

export const followAC = (userId: string): FollowACType  => {
    return {
        type: UserPageActionsTypeEnum.FOLLOW,
        payload: {
            userId
        }
    }
}

export const unFollowAC = (userId: string): UnFollowACType => {
    return {
        type: UserPageActionsTypeEnum.UNFOLLOW,
        payload: {
            userId
        }
    }
}

export const setUsersAC = (users: Array<UserType>): SetUsersACType => {
    return {
        type: UserPageActionsTypeEnum.SET_USERS,
        payload: {
            users
        }
    }
}

export const setTotalCountAC = (totalCount: number): SetTotalCountACType => {
    return {
        type: UserPageActionsTypeEnum.SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    }
}

export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => {
    return {
        type: UserPageActionsTypeEnum.SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    }
}


export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingACType => {
    return {
        type: UserPageActionsTypeEnum.TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    }
}

export const toggleIsFollowingProgress = (isFetching: boolean,userId: string): ToggleIdFollowingACType => {
    return {
        type: UserPageActionsTypeEnum.TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetching,
            userId,
        }
    }
}