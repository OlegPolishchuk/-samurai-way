import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppThunk, RootStateType} from "../redux/redux-store";


export const useAppDispatch = () => useDispatch<AppThunk>()

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector