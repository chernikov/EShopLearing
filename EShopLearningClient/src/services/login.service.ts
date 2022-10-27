import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '@models/login';
import { User } from '@models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl: string = '/api/login';

  // private headers = new HttpHeaders({
  // 	"content-type": "application/json",
  // 	"Accept": "application/json"
  // });
  // private options = {
  // 	headers : this.headers
  // };

  constructor(private http: HttpClient) {}

  login(login: Login | null) : Observable<any> {
      return this.http.post<Login>(this.apiUrl, login);
    }
}
