import {ActionsType, AuthActionsTypeEnum, AuthUserDataType} from "./types";

const initialState = {
    id: null as AuthUserDataType['id'],
    email: null as AuthUserDataType['email'],
    login: null as AuthUserDataType["login"],
    isFetching: false,
    isAuth: false,
    error: [{field: '', error: ''}]
}

type InitialStateType = typeof initialState


const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case AuthActionsTypeEnum.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        case AuthActionsTypeEnum.SET_LOGIN_ERRORS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export default authReducer