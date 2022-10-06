import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = '/api/users';

  // private headers = new HttpHeaders({
  // 	"content-type": "application/json",
  // 	"Accept": "application/json"
  // });
  // private options = {
  // 	headers : this.headers
  // };

  constructor(private http: HttpClient) {}

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  deleteUser(id: number) : Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }
  getUser(id: number) : Observable<User> {
    return this.http.get<User>(this.apiUrl + "/" + id);
  }

  saveUser(user: User | null) : Observable<User> {
    if (user?.id == 0) {
      return this.http.post<User>(this.apiUrl, user);
    } else {
      return this.http.put<User>(this.apiUrl, user);
    }
  }
}
