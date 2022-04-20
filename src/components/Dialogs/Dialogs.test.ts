import {v1} from "uuid";
import dialogsReducer, {
    DataType,
    MessageType,
    sendNewMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";

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
    newMessageText: ''
}


test('Case SEND-MESSAGE should add new message(state.newMessageText) to state.messages' +
    'and clear state.newMessageText', () => {

    const newMessage = 'newMessage'
    const initialStateCopy = {...initialState, newMessageText: newMessage}

    const endState = dialogsReducer(initialStateCopy, sendNewMessageAC())

    expect(endState.messages[endState.messages.length - 1].message).toBe(newMessage)
    expect(endState.messages === initialStateCopy.messages).toBe(false)

})

test('Case UPDATE-NEW-MESSAGE-TEXT should update state.newMessageText by onchange input', () => {

    const initialStateCopy = {...initialState}
    let endState;
    let letterCounter = ''

    for (let i = 0; i < 10; i++) {
        letterCounter +=  '*'
        endState = dialogsReducer(initialStateCopy, updateNewMessageTextAC(`${letterCounter}`))
    }

    expect(endState?.newMessageText).toBe('**********')
    expect(endState === initialStateCopy).toBe(false)
})