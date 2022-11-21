import { Injectable } from "@angular/core";
import { act, Actions, Effect, ofType } from "@ngrx/effects";
import { Action, ActionsSubject } from "@ngrx/store";
import { UserService } from "@services/user.service";
import { from, Observable, of } from "rxjs";
import { ActionTypes, AppActions, DeleteUser, DeleteUserFailure, DeleteUserSuccess, ErrorAction, GetUserAction, GetUserSuccess, LoadUsersSuccess, LoginAction, LoginFailure, LoginSuccess, SaveUserAction, SaveUserSuccess } from "./app.actions";

import { catchError, exhaust, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http";
import { LoginService } from "@services/login.service";
import { Router } from "@angular/router";
import { User } from "@models/user";

@Injectable()
export class AppEffects {
    constructor(
        private userService: UserService,
        private loginService: LoginService,
        private router: Router,
        private actions$: Actions) { }


    
    
    @Effect()
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.LoadUsers),
        switchMap(() => this.userService.getAllUsers()),
        map(users => new LoadUsersSuccess(users)),
        catchError((error) => {
            let typedError = error as HttpErrorResponse;
            return of(new ErrorAction(typedError.status + ":" + typedError.error))
        }) 
    );

    @Effect()
    deleteUser$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.DeleteUser),
        switchMap((deleteUserAction: DeleteUser) =>
            this.userService.deleteUser(deleteUserAction.userId).pipe(
                map(() => {
                    console.log("User deleted successfully!");
                    return new DeleteUserSuccess();
                })
            ),            
        ),
        catchError(error => of(new DeleteUserFailure(error)))
    );
    
    @Effect()
    deleteUserSuccess$: (Observable<Action>) = this.actions$.pipe(
        ofType(ActionTypes.DeleteUserSuccess),
        tap(() => this.userService.getAllUsers())
    );

    @Effect()
    deleteUserFailure$: (Observable<Action>) = this.actions$.pipe(
        ofType(ActionTypes.DeleteUserFailure),
        tap((action) => this.deleteUserFailure$.subscribe(() => console.log(action)))
    );

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.LoginAction),
        switchMap((loginAction: LoginAction) => {
            let login = loginAction.payload;
            return this.loginService.login(login);
        }),
        map((responce) => {
            console.log("Token: " + responce.token);
            return new LoginSuccess(responce.token);
        }),
        catchError((error) => { 
            console.log(error.message);            
            return of( new LoginFailure(error.message));
        }),        
    );

    @Effect({dispatch: false})
    loginSuccess$: Observable<Action | null> = this.actions$.pipe(
        ofType(ActionTypes.LoginSuccess),
        tap(() => this.router.navigate(["/users"]))
    );

    
    @Effect({dispatch: false})
    loginFailure$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.LoginFailure),
        tap(() => this.router.navigate(["/login"]))
    );   

    @Effect()
    getUserById$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.GetUserAction),
        mergeMap((action: GetUserAction) => { 
            let userId = action.userId;
            console.log("Hello from getUserById: " + userId);
            
            return this.userService.getUser(userId);
        }),
        map((data) => { 
            console.log("Hi from MAP: " + data.id);
            const respUser = {
                id: data.id,
                name: data.name
            };
            return new GetUserSuccess(respUser);
        }),
        catchError(error => { 
            return of(new ErrorAction(error.message));
        }),
    );  

    @Effect()
    saveUser$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.SaveUserAction),
        switchMap((saveUserAction: SaveUserAction) => { 
            const user = {
                id: saveUserAction.user.id,
                name: saveUserAction.user.name,
            };
            return this.userService.saveUser(user);
        }),
        map(() => { 
            this.router.navigate(["/users"]);
            return new SaveUserSuccess();
        }),
        catchError(error => { 
            return of(new ErrorAction(error.message));
        }),
    );
}