import { User } from "@models/user";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    app : AppState;
}

export interface AppState {
    users : User[];
    num : number;
    state : "loading..." | "loaded" | "";
    error : 'no' | "yes";
    errorMessage: string;
    isAuthenticated: boolean | null;
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


export const getErrorMessage = createSelector(
    getState, 
    state => {
        return state.errorMessage;
    }
)

export const getLogin = createSelector(
    getState,
    state => { 
        return state.isAuthenticated;
    }
)

export const getLoginSuccess = createSelector(
    getState,
    state => { 
        return state.isAuthenticated;
    }
)

export const getLoginFailure = createSelector(
    getState,
    state => { 
        return state.errorMessage;
    }
)

export const getUser = createSelector(
    getState,
    state => { 
        return state.users;
    }
)


