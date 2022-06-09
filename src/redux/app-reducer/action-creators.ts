import {AppActionTypeEnum, SetInitACType} from "./types";

export const setInitAC = (initialized: boolean): SetInitACType => {
  return {
    type: AppActionTypeEnum.SET_INITIALIZED,
    payload: {
      initialized
    }
  }
}