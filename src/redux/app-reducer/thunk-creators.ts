import {AppThunk} from "../redux-store";
import {getAuthUserDataTC} from "../auth-reducer/thunk-creators";
import {setInitAC} from "./action-creators";


export const initializeAppThunk = () => (dispatch: AppThunk) => {
  let authDispatchResponse = dispatch(getAuthUserDataTC())

  authDispatchResponse.then( () => dispatch(setInitAC(true)) )
}