

export enum AuthActionsTypeEnum {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
    SET_LOGIN_ERRORS = 'SET_LOGIN_ERRORS'
}


export type AuthUserDataType = {
    login: string | null,
    email: string | null,
    id: number | null
}

export type SetAuthUserDataACType = {
    type: AuthActionsTypeEnum.SET_AUTH_USER_DATA,
    payload: AuthUserDataType
}

export type ErrorFieldType = {
    field: string,
    error: string
}

export type SetLoginErrorsACType = {
    type: AuthActionsTypeEnum.SET_LOGIN_ERRORS,
    payload: {
        error: ErrorFieldType[]
    }
}


export type ActionsType = SetAuthUserDataACType | SetLoginErrorsACType