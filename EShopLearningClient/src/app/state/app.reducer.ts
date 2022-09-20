import { User } from "@models/user";
import { Actions, ActionTypes } from "./app.actions";

export interface State {
    users : User[];
}



const initialState: State =
{
    users: []
}



export function reducer(state = initialState, action: Actions): State {
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