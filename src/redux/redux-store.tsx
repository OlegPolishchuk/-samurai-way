import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer/users-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))



export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export type AppThunk = ThunkDispatch<RootStateType, unknown, Action>