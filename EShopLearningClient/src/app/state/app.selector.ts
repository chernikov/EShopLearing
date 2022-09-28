import { User } from "@models/user";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    app : AppState;
}

export interface AppState {
    users : User[];
    num : number;
    error : 'no' | "yes";
    state : "loading..." | "loaded" | "";
}



export const getState = createFeatureSelector<AppState>('app');

export const getUsers = createSelector(
    getState,
    state => state.users
)

export const getNumber = createSelector(
    getState, 
    state => {
        return state.num;
    }
)


export const getError = createSelector(
    getState, 
    state => {
        return state.error;
    }
)




