import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppDispatchType, RootStateType} from "../../redux/redux-store";
import {sendNewMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
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