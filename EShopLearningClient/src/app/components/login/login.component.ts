import { Component, OnInit } from '@angular/core';
import { Login } from '@models/login';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login : Login | null;
  constructor(private loginService : LoginService) { 
    this.login = new Login("", "");
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.loginService.login(this.login).subscribe(res => {
      console.log(res);
    })
  }
}
