import { ActionUserType } from "../../types/actionUser";

interface ActionUser {
  type:ActionUserType
}

export interface loginUserAction extends ActionUser{
  type:"LOGIN_USER";
  payload: {_id:string,email:string,login:string, password:string}
}

export interface addUserAction extends ActionUser{
  type:"ADD_USER"
  payload: {_id:string,login:string,email:string, password:string}
}

export interface loginUserSagaAction extends ActionUser{
  type:"LOGIN_USER_SAGA";
  payload: {login:string, password:string}
}

export interface addUserSagaAction extends ActionUser{
  type:"ADD_USER_SAGA";
  payload: {login:string,email:string, password:string}
}

export type ActionsUser = loginUserAction | addUserAction | loginUserSagaAction |
addUserSagaAction