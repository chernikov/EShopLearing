import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user';
import { Store } from '@ngrx/store';
import { UserService } from '@services/user.service';
import { GetUserAction, SaveUserAction } from 'src/app/state/app.actions';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  user : User | null = null;
  userId : number = 0;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private store : Store) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.userId = parseInt(param["id"]);
      this.getUser(this.userId);
    })
  }

  getUser(id: number) : void {
    this.store.dispatch(new GetUserAction(id));
  }

  saveUser() { 
    let payload = {
      id: this.user?.id,
      name: this.user?.name
    };
    this.store.dispatch(new SaveUserAction(payload));
  }
 
}
