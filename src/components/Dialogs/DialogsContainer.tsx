import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppDispatchType, RootStateType} from "../../redux/redux-store";
import {InitialStateType, sendNewMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    updateMessageText: (text: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer