import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : any;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers() : void {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    })  
  } 

  deleteUser(id : number) {
    this.userService.deleteUser(id).subscribe(res => {
      this.getAllUsers();
    });
  }

  getUser(id : number){
    this.userService.getUser(id).subscribe(res => {
      this.users = res;
    });
  }

  saveUser(user : User | null){
    this.userService.saveUser(user).subscribe(res => {
      this.saveUser(user);
    });
  }
}
   