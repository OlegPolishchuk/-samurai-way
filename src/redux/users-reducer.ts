export type UserType = {
    id: string
    name: string
    status: string
    followed: boolean
    photos: {
        small: string | null
        large: string | null
    }
    uniqueUrlName?: string | null
    // location: {city: string, country: string}
}

const initialState = {
    // users: [
    //     {id: v1(),  fullName: 'Dmity', status: '', location: {city: 'Minsk', country: 'Belarus'}, followed: false },
    //     {id: v1(),  fullName: 'Sasha', status: 'Im a boss', location: {city: 'Moscow', country: 'Russia'}, followed: true },
    //     {id: v1(),  fullName: 'Alex', status: 'Someone probably was here', location: {city: 'Kiev', country: 'Ukraine'}, followed: true }
    // ] as Array<UserType>
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 20,
    currentPage: 1
}

export type InitialStateType = typeof initialState
export type ActionTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {

        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }

        case 'SET-USERS':
            return {...state, users: action.payload.users}


        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.currentPage}

        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.payload.totalCount}

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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}

export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}

export default usersReducer