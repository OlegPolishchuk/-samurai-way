import React from 'react';
import style from './Main.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, DialogsPageType, ProfilePageType, StoreType} from "../../redux/state";
import {RootStateType} from "../../redux/redux-store";


type PropsType = {
    // dialogsPage: DialogsPageType
    // profilePage: ProfilePageType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
    store: RootStateType
}

const Main = (props: PropsType) => {

    // const {profilePage, dialogsPage, addPost,updateNewPostText} = props; //del
    // const {profilePage, dialogsPage} = props;
    const {store} = props;
    return (
        <main className={style.main_wrapper + ' main_style'}>
            {/*<Route path={'/profile'} render={()=> <Profile newPostText={profilePage.newPostText} updateNewPostText={updateNewPostText} posts={profilePage.posts} addPost={addPost}/>} />*/}
            <Route
                path={'/profile'}
                render={() => <Profile
                    // newPostText={profilePage.newPostText}
                    // posts={profilePage.posts}
                    dispatch={props.dispatch}
                    store={props.store}
                />}/>
            <Route
                path={'/dialogs'}
                render={() => <Dialogs
                    // dialogsPage={dialogsPage}
                    // dispatch={props.dispatch}
                    // newMessageText={dialogsPage.newMessageText}
                    dialogsPage={store.dialogsPage}
                    dispatch={props.dispatch}
                    newMessageText={store.dialogsPage.newMessageText}
                />}/>
        </main>
    );
};

export default Main;