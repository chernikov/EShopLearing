import { User } from "@models/user";
import { Action } from "@ngrx/store";
import { ActionTypes, LoadUsersSuccess, AddNumber } from "./app.actions";
import { AppState } from "./app.selector";

const initialState: AppState =
{
    users: [],
    num : 0,
    error : "no",
    state : ""
}

export function AppReducer(state : AppState = initialState, action: Action): AppState {
    switch (action.type) {
        case ActionTypes.LoadUsersSuccess: {
             return {
                 ...state,
                 users: (action as LoadUsersSuccess).payload,
                 state: "loaded"
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
                state : "loading..."
            }
       }

        default:
            return state;
    }
}