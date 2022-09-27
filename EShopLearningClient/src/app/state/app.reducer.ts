import { User } from "@models/user";
import { Action, ActionReducerMap } from "@ngrx/store";
import { AppActions, ActionTypes, LoadUsersSuccess, AddNumber } from "./app.actions";
import { AppState } from "./app.selector";

const initialState: AppState =
{
    users: [],
    num : 0
}

export function AppReducer(state : AppState = initialState, action: Action): AppState {
    switch (action.type) {
        case ActionTypes.LoadUsersSuccess: {
             return {
                 ...state,
                 users: (action as LoadUsersSuccess).payload
             };
        }
        case ActionTypes.AddNumber : {
            return {
                ...state,
                num: state.num + (action as AddNumber).increase
            };
        }

        default:
            return state;
    }
}