export enum UserPageActionsTypeEnum {
    FOLLOW = 'FOLLOW,',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_COUNT = 'SET-TOTAL-COUNT',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
}

export type UserType = {
    id: string
    name: string
    status: string
    followed: boolean
    uniqueUrlName?: null
    photos: {
        small: string | null,
        large: string | null
    }
}

const initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true
}

export type InitialStateType = typeof initialState

export type ActionTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setIsFetchingAC>

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {

        case UserPageActionsTypeEnum.FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }

        case UserPageActionsTypeEnum.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }

        case UserPageActionsTypeEnum.SET_USERS:
            return {...state, users: action.payload.users}

        case UserPageActionsTypeEnum.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload.totalCount}

        case UserPageActionsTypeEnum.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}

        case UserPageActionsTypeEnum.TOGGLE_IS_FETCHING:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }

}

export const followAC = (userId: string) => {
    return {
        type: UserPageActionsTypeEnum.FOLLOW,
        payload: {
            userId
        }
    } as const
}

export const unFollowAC = (userId: string) => {
    return {
        type: UserPageActionsTypeEnum.UNFOLLOW,
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: UserPageActionsTypeEnum.SET_USERS,
        payload: {
            users
        }
    } as const
}

export const setTotalCountAC = (totalCount: number) => {
    return {
        type: UserPageActionsTypeEnum.SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: UserPageActionsTypeEnum.SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}


export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: UserPageActionsTypeEnum.TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}

//thunks


export default usersReducer