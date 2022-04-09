import {ActionsTypes, DialogsPageType, MessageType} from "./state";
import {v1} from "uuid";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
//
// type DialogsReducerType = ReturnType<typeof SendNewMessageAC>
//     | ReturnType<typeof updateNewMessageTextAC>

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: v1(),
                name: 'Oleg', //need to update!!
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\'',
                message: state.newMessageText
            }
            // Проверка
            console.log(newMessage)
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            break;

        default:
            return state
    }
    return state
}

export default dialogsReducer

export const SendNewMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText
    } as const
}