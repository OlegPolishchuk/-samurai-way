import {ActionType, AppActionTypeEnum} from "./types";

const initialState = {
  initialized: false,
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {

    case AppActionTypeEnum.SET_INITIALIZED:
      return {
        ...state,
        ...action.payload
      }

    default: return state
  }
}