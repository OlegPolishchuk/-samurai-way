import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppDispatchType, RootStateType} from "../../redux/redux-store";
import {InitialStateType, sendNewMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import React from "react";

type MapStateToPropsType = {
    dialogsPage: InitialStateType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateMessageText: (text: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        updateMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(sendNewMessageAC())
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)