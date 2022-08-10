import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  user : User | null = null;
  userId : number = 0;

  constructor(private activatedRoute : ActivatedRoute,
      private http : HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.userId = parseInt(param["id"]);
      this.getUser(this.userId);
    })
  }

  getUser(id : number) : void 
  {
    this.http.get<User>("/api/users/" + id).subscribe(res => {
      this.user = res;
    }, null, () => { console.log("Complete"); });
  }

  
  saveUser() {
    if (this.user?.id == 0) {
      this.http.post<User>("/api/users", this.user).subscribe(res => {
        this.user = res;
      });
    } else {
      this.http.put<User>("/api/users", this.user).subscribe(res => {
        this.user = res;
      });
    }
  }
}
