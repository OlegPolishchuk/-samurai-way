import {v1} from "uuid";

export type UserType = {
    id: string
    fullName: string
    status: string
    followed: boolean
    location: {city: string, country: string}
}

const initialState = {
    users: [
        {id: v1(),  fullName: 'Dmity', status: '', location: {city: 'Minsk', country: 'Belarus'}, followed: false },
        {id: v1(),  fullName: 'Sasha', status: '', location: {city: 'Moscow', country: 'Russia'}, followed: true },
        {id: v1(),  fullName: 'Alex', status: '', location: {city: 'Kiev', country: 'Ukraine'}, followed: true }
    ] as Array<UserType>
}

export type InitialStateType = typeof initialState
export type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true}: el)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false}: el)
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }

}

export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unFollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export default usersReducer