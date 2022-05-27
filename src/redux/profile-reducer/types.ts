export enum ProfilePageActionsTypeEnum {
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_USER_STATUS = 'SET_USER_STATUS',
    GET_USER_STATUS = 'GET_USER_STATUS',
}

export type ProfileContactsType = {
    // facebook: string | null,
    // website: string | null,
    // vk: string | null,
    // twitter: string | null,
    // instagram: string | null,
    // youtube: string | null,
    // github: string | null,
    // mainLink: string | null,
    [key: string]: string | null
}

export type ProfileType = {
    aboutMe: string,
    contacts: ProfileContactsType,
    lookingForAJob: string,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}


export type ActionsTypes = AddPostACType
    | UpdateNewPostTextACType
    | SetUserProfileACType
    | SetIsFetchingACType
    | GetUserStatusACType
    | SetUserStatusACType


// actions type

export type AddPostACType = {
    type: ProfilePageActionsTypeEnum.ADD_POST,
}

export type UpdateNewPostTextACType = {
    type: ProfilePageActionsTypeEnum.UPDATE_NEW_POST_TEXT,
    payload: { newText: string }
}


export type SetUserProfileACType = {
    type: ProfilePageActionsTypeEnum.SET_USER_PROFILE,
    payload: { profile: ProfileType }
}

export type SetIsFetchingACType = {
    type: ProfilePageActionsTypeEnum.TOGGLE_IS_FETCHING,
    payload: { isFetching: boolean }
}

export type GetUserStatusACType = {
    type: ProfilePageActionsTypeEnum.GET_USER_STATUS,
    payload: { userStatus: string }
}

export type SetUserStatusACType = {
    type: ProfilePageActionsTypeEnum.SET_USER_STATUS,
    payload: { userStatus: string }
}