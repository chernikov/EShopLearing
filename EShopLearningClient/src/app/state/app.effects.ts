import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { UserService } from "@services/user.service";
import { Observable, of } from "rxjs";
import { ActionTypes, AppActions, ErrorAction, LoadUsersSuccess } from "./app.actions";

import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
    constructor(
        private userService: UserService,
        private actions$: Actions) { }

    @Effect()
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.LoadUsers),
        mergeMap(action => {
            return this.userService.getAllUsers()
                .pipe<LoadUsersSuccess>(
                    map(users => {
                        debugger;
                        return new LoadUsersSuccess(users)
                    })
            );
        })
    );
}