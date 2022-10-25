import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { UserService } from "@services/user.service";
import { from, Observable, of } from "rxjs";
import { ActionTypes, AppActions, ErrorAction, LoadUsersSuccess } from "./app.actions";

import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class AppEffects {
    constructor(
        private userService: UserService,
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
}