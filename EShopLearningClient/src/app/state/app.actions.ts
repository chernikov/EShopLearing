import { User } from "@models/user";
import { Action } from "@ngrx/store";

export enum ActionTypes {
    Error = 'Error',
    
    LoadUsers = 'Load users',
    LoadUsersSuccess = 'Load users success',
    
}



export class LoadUsers implements Action {
    readonly type = ActionTypes.LoadUsers;
    constructor() { }
}


export class LoadUsersSuccess implements Action {
    readonly type = ActionTypes.LoadUsersSuccess;
    constructor(public payload : User[]) { }
}


export class Error implements Action {
    readonly type = ActionTypes.Error;
    constructor(public payload : string) { }
}

// Union the valid types
export type Actions = 
    LoadUsers 
    | LoadUsersSuccess
    | Error;
  