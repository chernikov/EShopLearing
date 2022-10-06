import { User } from "@models/user";
import { Action } from "@ngrx/store";

export enum ActionTypes {
    Error = 'Error',
    LoadUsers = 'Load users',
    LoadUsersSuccess = 'Load users success',
    AddNumber = 'Add Number'
}

export class AddNumber implements Action {
    readonly type = ActionTypes.AddNumber;

    constructor(public increase : number) {}
}


export class LoadUsers implements Action {
    readonly type = ActionTypes.LoadUsers;
    constructor() { }
}


export class LoadUsersSuccess implements Action {
    readonly type = ActionTypes.LoadUsersSuccess;
    constructor(public payload : User[]) { }
}


export class ErrorAction implements Action {
    readonly type = ActionTypes.Error;
    constructor(public payload : string) { }
}

// Union the valid types
export type AppActions = 
    LoadUsers 
    | LoadUsersSuccess
    | Error;
  