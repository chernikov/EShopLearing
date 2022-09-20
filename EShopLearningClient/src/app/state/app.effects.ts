import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { UserService } from "@services/user.service";
import { Observable } from "rxjs";
import { ActionTypes } from "./app.actions";

@Injectable()
export class AppEffects {
    constructor(
        private userService: UserService,
        private actions$: Actions) { }

    @Effect()
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.LoadUsers),
        mergeMap(action => {
            return this.profileService.get(id).pipe(
                map(profile => new profileActions.LoadProfileSuccess(profile))
            );
        }),
    );