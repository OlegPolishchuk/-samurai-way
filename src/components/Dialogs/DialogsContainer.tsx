import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppDispatchType, RootStateType} from "../../redux/redux-store";
import {InitialStateType, sendNewMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import React from "react";
import {MessageFormType} from "../TextArea/TextArea";

type MapStateToPropsType = {
    dialogsPage: InitialStateType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: (values: string) => void
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
        addMessage: (values: string) => {
            dispatch(sendNewMessageAC(values))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)