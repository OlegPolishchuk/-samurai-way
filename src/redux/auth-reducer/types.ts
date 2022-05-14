

export enum AuthActionsTypeEnum {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
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


export type ActionsType = SetAuthUserDataACType