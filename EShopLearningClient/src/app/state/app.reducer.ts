import { User } from "@models/user";
import { AppActions, ActionTypes } from "./app.actions";
import { AppState } from "./app.state";

const initialState: AppState =
{
    users: []
}

export function AppReducer(state = initialState, action: AppActions): AppState {
    switch (action.type) {

        case ActionTypes.LoadUsersSuccess: {
             return {
                 ...state,
                 users: action.payload
             };
         }

        default:
            return state;
    }
}