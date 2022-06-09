
export enum AppActionTypeEnum {
  SET_INITIALIZED = 'SET_INITIALIZED',
}


export type SetInitACType = {
  type: AppActionTypeEnum.SET_INITIALIZED,
  payload: {
    initialized: boolean
  }
}


export type ActionType = SetInitACType