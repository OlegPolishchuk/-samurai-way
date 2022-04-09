import {ActionsTypes, PostType, ProfilePageType} from "./state";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

// type ProfileReducerType = ReturnType<typeof addPostAC>
//     | ReturnType<typeof updateNewPostTextAC>

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                date: new Date().toISOString(),
                post: state.newPostText,
                likeCount: 0,
                userName: 'Oleg',
                photo: ''
            }
            console.log(newPost)
            state.posts.unshift(newPost)
            state.newPostText = ''
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;

        default:
            return state
    }

    return state

}

export default profileReducer


//actionCreators
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}
