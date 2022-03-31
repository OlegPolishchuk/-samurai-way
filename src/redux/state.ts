/// DialogsPage types
import {v1} from "uuid";
import {renderTree} from "../render";

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
export type DialogsPageType = {
    data: Array<DataType>
    messages: Array<MessageType>
}

// Profile page types
export type PostType = {
    id: string
    userName: string
    photo: string
    post: string
    date: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

// Sidebar type
type SidebarType = {}

// RootState type
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

// State
export const state: RootStateType = {
    dialogsPage: {
        data: [
            {id : v1(), name: 'Piter Parker', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''},
            {id: v1(), name: 'Bruce Wayne', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''},
            {id: v1(), name: 'Clark Kent', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}
        ],
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
        ]
    },
    profilePage: {
        posts: [
            {
                id: v1(),
                userName: 'Oleg Polishchuk',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU',
                post: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
'                    Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
'                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n' +
'                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n' +
'                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
'                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                likeCount: 12,
                date: new Date().toISOString()
            },
            {
                id: v1(),
                userName: 'Petr Ivanov',
                photo: 'data:image/jpeg;base64,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',
                post: 'Hello everyone',
                date: new Date().toISOString(),
                likeCount: 0
            }
        ],
        newPostText: '',
    },
    sidebar: {}
}

export const addPost = () => {
    const newPost: PostType = {
        id: v1(),
        date: new Date().toISOString(),
        post: state.profilePage.newPostText,
        likeCount: 0,
        userName: 'Oleg',
        photo: ''
    }
    console.log(newPost)
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)
}

export const addMessage = (text: string) => {
    const newMessage: MessageType = {
        id: v1(),
        name: 'oleg',
        avatar: '',
        message: text
    }

    console.log(newMessage)
    state.dialogsPage.messages.push(newMessage)
    renderTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree(state)
}