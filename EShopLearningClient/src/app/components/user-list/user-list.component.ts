import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddNumber, LoadUsers } from 'src/app/state/app.actions';
import { AppState, getError, getNumber, getState, getUsers, State } from 'src/app/state/app.selector';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit 
{

  public users$: Observable<User[]> | undefined;

  public num$: Observable<number> | undefined;

  public error$: Observable<"yes" | "no"> | undefined;

  public appState$ : Observable<AppState> | undefined;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.num$ = this.store.pipe(select(getNumber));
    this.users$ = this.store.pipe(select(getUsers));

    this.error$ = this.store.pipe(select(getError));
    this.appState$ = this.store.pipe(select(getState));
  }


  getAllUsers() : void {
    this.store.dispatch(new LoadUsers());
  } 

  addNumber() : void 
  {
    let addNumberAction : Action = new AddNumber(2);
    this.store.dispatch(addNumberAction);
  }

  deleteUser(id : number) {

  }
}
   