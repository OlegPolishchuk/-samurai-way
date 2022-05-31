import {v1} from "uuid";
import {MessageFormType} from "../components/TextArea/TextArea";

export type DataType = {
    id: string
    name: string
    avatar: string
}
export type MessageType = {
    id: string
    name: string
    avatar: string
    message: string
}


const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const initialState = {
    data: [
        {
            id: v1(),
            name: 'Piter Parker',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''
        },
        {
            id: v1(),
            name: 'Bruce Wayne',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''
        },
        {
            id: v1(),
            name: 'Clark Kent',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''
        }
    ] as Array<DataType>,
    messages: [
        {
            id: v1(),
            name: 'Piter Parker',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\'',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: v1(),
            name: 'Bruce Wayne',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\'',
            message: 'Hello everyone!!!'
        }
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

export type ActionsTypes = ReturnType<typeof sendNewMessageAC> | ReturnType<typeof updateNewMessageTextAC>

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            //need to update!! name, avatar
            const newMessage: MessageType = {
                id: v1(),
                name: 'Oleg',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\'',
                message: action.payload.values
            }

            return {...state, messages: [...state.messages, newMessage]}

        case UPDATE_NEW_MESSAGE_TEXT:
           return state

        default:
            return state
    }
}

export default dialogsReducer

// Actions:

export const sendNewMessageAC = (values:string ) => {
    return {
        type: 'SEND-MESSAGE',
        payload: {values}
    } as const
}

export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        payload: {
            newText
        }
    } as const
}