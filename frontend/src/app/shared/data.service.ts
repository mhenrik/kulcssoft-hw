import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';
import {User} from '../user/user.model';
import {AuthService} from './auth.service';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient, private userService: UserService, private authService: AuthService){}

  getUsersFromServer() {
    console.log(this.authService.getToken());
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('token', this.authService.getToken());
    this.httpClient.get<User[]>('http://localhost:8080/users', {
      headers: headers
    })
      .subscribe(
        (users) => {
          this.userService.setUsers(users);
        }
      );
  }

  addUserToServer(user: User) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('token', this.authService.token);
    const params = new HttpParams()
      .set('username', user.username)
      .set('email', user.email);
    const options = {
      headers,
      params,
      withCredentials: true
    };
    this.httpClient.post('http://localhost:8080/user', null, options)
      .subscribe(response => {
          console.log(response);
        },
        error1 => {
          console.log('error');
        }
      );
  }

  public deleteUserFromServer(userId: number) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('token', this.authService.token);
    const params = new HttpParams()
      .set('userId', userId.toLocaleString());
    const options = {
      headers,
      params,
      withCredentials: true
    };
    this.httpClient.delete('http://localhost:8080/user/' + userId, options)
      .subscribe(response => {
          console.log(response);
        },
        error1 => {
          console.log('error');
        }
      );
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    const options = {
      headers,
      params,
      withCredentials: true
    };
    this.httpClient.post('http://localhost:8080/login', null, options)
      .subscribe(response => {
          this.authService.login(response);
        },
        error1 => {
          console.log('error');
        }
      );
  }

}
