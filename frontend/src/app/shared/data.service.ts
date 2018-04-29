import {HttpClient, HttpHeaders} from '@angular/common/http';
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
}
