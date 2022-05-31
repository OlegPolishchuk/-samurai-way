import {v1} from "uuid";
import {DataType, MessageType} from "../../redux/dialogs-reducer";

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



