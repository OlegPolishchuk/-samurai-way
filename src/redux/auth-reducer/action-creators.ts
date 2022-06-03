import {
    AuthActionsTypeEnum,
    AuthUserDataType,
    ErrorFieldType,
    SetAuthUserDataACType,
    SetLoginErrorsACType
} from "./types";

export const setAuthUserDataAC = (data: AuthUserDataType): SetAuthUserDataACType => {
    return {
        type: AuthActionsTypeEnum.SET_AUTH_USER_DATA,
        payload: {
           ...data
        }
    }
}

export const setLoginErrorsAC = (error: ErrorFieldType[]): SetLoginErrorsACType => {
    return {
        type: AuthActionsTypeEnum.SET_LOGIN_ERRORS,
        payload: {error}
    }
}