import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadUsers } from 'src/app/state/app.actions';
import { AppState, getUsers } from 'src/app/state/app.state';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  
  constructor(private store: Store<AppState>,
    public users$: Observable<User[]>) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.users$ = this.store.pipe(select(getUsers));
  }


  getAllUsers() : void {
    this.store.dispatch(new LoadUsers());
  } 
}
   