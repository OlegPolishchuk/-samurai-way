import {ActionTypes, UserPageActionsTypeEnum} from "./types";


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
    isFetching: true,
    followingInProgress: [] as string[],
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

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

        case UserPageActionsTypeEnum.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }

        default:
            return state
    }

}



//thunks


export default usersReducer