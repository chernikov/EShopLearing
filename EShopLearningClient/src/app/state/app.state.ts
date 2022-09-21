import { User } from "@models/user";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    app : AppState;
}

export interface AppState {
    users : User[];
}



const getState = createFeatureSelector<AppState>('app');

export const getUsers = createSelector(
    getState,
    state => state.users
)
