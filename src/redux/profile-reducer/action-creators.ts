import {
    AddPostACType,
    GetUserStatusACType,
    ProfilePageActionsTypeEnum,
    ProfileType,
    SetIsFetchingACType,
    SetUserProfileACType,
    SetUserStatusACType,
    UpdateNewPostTextACType
} from "./types";

export type PostType = {
    id: string
    userName: string
    photo: string
    post: string
    date: string
    likeCount: number
}


export const addPostAC = (post: string): AddPostACType => {
    return {
        type: ProfilePageActionsTypeEnum.ADD_POST,
        payload: {post}
    }
}

export const updateNewPostTextAC = (newText: string): UpdateNewPostTextACType => {
    return {
        type: ProfilePageActionsTypeEnum.UPDATE_NEW_POST_TEXT,
        payload: {
            newText
        }
    }
}

export const setUserProfileAC = (profile: ProfileType): SetUserProfileACType => {
    return {
        type: ProfilePageActionsTypeEnum.SET_USER_PROFILE,
        payload: {profile}
    }
}

export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingACType => {
    return {
        type: ProfilePageActionsTypeEnum.TOGGLE_IS_FETCHING,
        payload: {isFetching}
    }
}

export const getUserStatusAC = (userStatus: string): GetUserStatusACType => {
    return {
        type: ProfilePageActionsTypeEnum.GET_USER_STATUS,
        payload: {userStatus}
    }
}

export const setUserStatusAC = (userStatus: string): SetUserStatusACType => {
    return {
        type: ProfilePageActionsTypeEnum.SET_USER_STATUS,
        payload: {userStatus}
    }
}

