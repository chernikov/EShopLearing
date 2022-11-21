import { User } from "@models/user";
import { Action } from "@ngrx/store";
import { ActionTypes, LoadUsersSuccess, AddNumber, ErrorAction } from "./app.actions";
import { AppState } from "./app.selector";

const initialState: AppState =
{
    users: [],
    num : 0,
    error : "no",
    state : "",
    errorMessage: "",
    isAuthenticated: null,
}

export function AppReducer(state : AppState = initialState, action: Action): AppState {
    switch (action.type) {
        case ActionTypes.LoadUsersSuccess: {
             return {
                 ...state,
                 users: (action as LoadUsersSuccess).payload,
                 state: "loaded",
                 error: "no",
                 errorMessage: ""
             };
        }
        case ActionTypes.AddNumber : {
            return {
                ...state,
                num: state.num + (action as AddNumber).increase
            };
        }
        case ActionTypes.LoadUsers : {
            return {
                ...state,
                state : "loading...",
                error : "no",
                errorMessage: ""
            }
        }
        case ActionTypes.Error : {
            return {
                ...state,
                error: "yes",
                errorMessage : (action as ErrorAction).payload,
                state: ""
            }
        }
        
        case ActionTypes.LoginAction: { 
            return {
                ...state,
                error: "no",
                isAuthenticated: false,
            }
        }
        
        case ActionTypes.LoginSuccess: { 
            return {
                ...state,
                error: "no",
                isAuthenticated: true,
            }
        }
            
        case ActionTypes.LoginFailure: { 
            return {
                ...state,
                error: "yes",
                isAuthenticated: false,
                errorMessage : (action as ErrorAction).payload,
            }
        }
            
        case ActionTypes.DeleteUser: { 
            return {
                ...state,                
            }
        }
            
        case ActionTypes.DeleteUserFailure: { 
            return {
                ...state,
                error: "yes",
            }
        }    
        

        default:
            return state;
    }
}