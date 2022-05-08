import {
    AddPostACType,
    ProfilePageActionsTypeEnum,
    ProfileType,
    SetUserProfileACType,
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


export const addPostAC = (): AddPostACType => {
    return {
        type: ProfilePageActionsTypeEnum.ADD_POST
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


