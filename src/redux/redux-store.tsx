import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer/users-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import authReducer from "./auth-reducer/auth-reducer";
import {appReducer} from "./app-reducer/app-reducer";




const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
   })

export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store.getState()

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export type AppThunk = ThunkDispatch<RootStateType, unknown, Action>