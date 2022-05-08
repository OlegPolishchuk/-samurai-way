import {UserType} from "./users-reducer";

export enum UserPageActionsTypeEnum {
    FOLLOW = 'FOLLOW,',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_COUNT = 'SET-TOTAL-COUNT',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
}


export type FollowACType = {
    type: UserPageActionsTypeEnum.FOLLOW,
    payload: {userId: string}
}

export type UnFollowACType = {
    type: UserPageActionsTypeEnum.UNFOLLOW,
    payload: {userId: string}
}

export type SetUsersACType = {
    type: UserPageActionsTypeEnum.SET_USERS,
    payload: {users: Array<UserType>}
}

export type SetTotalCountACType = {
    type: UserPageActionsTypeEnum.SET_TOTAL_COUNT,
    payload: {totalCount: number}
}

export type SetCurrentPageACType = {
    type: UserPageActionsTypeEnum.SET_CURRENT_PAGE,
    payload: {currentPage: number}
}

export type SetIsFetchingACType = {
    type: UserPageActionsTypeEnum.TOGGLE_IS_FETCHING,
    payload: {isFetching: boolean}
}


export type ActionTypes = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetTotalCountACType
    | SetCurrentPageACType
    | SetIsFetchingACType