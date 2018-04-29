import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';
import {User} from '../user/user.model';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient, private userService: UserService){}

  getUsersFromServer() {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.get<User[]>('http://localhost:8080/users', {
      headers: headers,
    })
      .subscribe(
        (users) => {
          this.userService.setUsers(users);
        }
      );
  }

  addUserToServer(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
      /*'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy'*/
    });
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
      /*'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy'*/
    });
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

}
