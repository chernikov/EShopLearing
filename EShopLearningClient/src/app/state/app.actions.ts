import { Login } from "@models/login";
import { User } from "@models/user";
import { Action} from "@ngrx/store";

export enum ActionTypes {
    Error = 'Error',
    LoadUsers = 'Load users',
    LoadUsersSuccess = 'Load users success',
    AddNumber = 'Add Number',
    LoginAction = 'Login',
    LoginSuccess = 'Login success',
    LoginFailure = 'Login failure',
    DeleteUser = "Delete User",
    DeleteUserSuccess = "Delete user success",
    DeleteUserFailure = "Deete user failure",
    SaveUserAction = "Save User",
    SaveUserSuccess = "Save user success",
    GetUserAction = "Get User",
    GetUserSuccess = "Get user success"

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

export class LoginAction implements Action {
    readonly type = ActionTypes.LoginAction;
    constructor(public payload : Login) { }
}

export class LoginSuccess implements Action {
    readonly type = ActionTypes.LoginSuccess;
    constructor(public payload : User) { }
}

export class LoginFailure implements Action {
    readonly type = ActionTypes.LoginFailure;
    constructor(public payload : string) { }
}

export class DeleteUser implements Action {
    readonly type = ActionTypes.DeleteUser;
    constructor(public userId : number) { }
}

export class DeleteUserSuccess implements Action {
    readonly type = ActionTypes.DeleteUserSuccess;
    constructor() { }
}

export class DeleteUserFailure implements Action {
    readonly type = ActionTypes.DeleteUserFailure;
    constructor(public error : string) { }
}

export class SaveUserAction implements Action { 
    readonly type = ActionTypes.SaveUserAction;
    constructor(public user : any) { }
}

export class SaveUserSuccess implements Action { 
    readonly type = ActionTypes.SaveUserSuccess;
    constructor() { }
}

export class GetUserAction implements Action { 
    readonly type = ActionTypes.GetUserAction;
    constructor(public userId: number) { }
}

export class GetUserSuccess implements Action { 
    readonly type = ActionTypes.GetUserAction;
    constructor(public user: User) { }
}
// Union the valid types
export type AppActions = 
    LoadUsers 
    | LoadUsersSuccess
    | Error
    | LoginAction
    | LoginSuccess
    | LoginFailure
    | DeleteUser
    | DeleteUserSuccess
    | DeleteUserFailure
    | SaveUserAction
    | SaveUserSuccess
    | GetUserAction
    | GetUserSuccess;
  