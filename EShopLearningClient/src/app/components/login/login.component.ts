import { Component, OnInit } from '@angular/core';
import { Login } from '@models/login';
import { select, Store } from '@ngrx/store';
import { LoginService } from '@services/login.service';
import { Observable } from 'rxjs';
import { LoginAction } from 'src/app/state/app.actions';
import { AppState, getState, getError, getErrorMessage } from 'src/app/state/app.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login("", "");
  
  public error$: Observable<"yes" | "no"> | undefined;
  
  public errorMessage$: Observable<string | null> | undefined;
  
  constructor(private store: Store<AppState>) { 
    this.login = new Login("", "");
  }

  ngOnInit(): void {
    this.error$ = this.store.pipe(select(getError));   
    
    this.errorMessage$ = this.store.pipe(select(getErrorMessage));   
  }

  onLogin() {
    const payload = {
      name: this.login.name,
      password: this.login.password
    };
    this.store.dispatch(new LoginAction(payload));    
  }
}
