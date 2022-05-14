import {AuthActionsTypeEnum, AuthUserDataType, SetAuthUserDataACType} from "./types";

export const setAuthUserDataAC = (data: AuthUserDataType): SetAuthUserDataACType => {
    return {
        type: AuthActionsTypeEnum.SET_AUTH_USER_DATA,
        payload: {
           ...data
        }
    }
}