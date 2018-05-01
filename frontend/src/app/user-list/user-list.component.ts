import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user/user.model';
import {UserService} from '../shared/user.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  success = false;
  onDel = Observable.create(obs => {
    obs.next(false);
  }).delay(1500);
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.usersChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
    this.users = this.userService.getUsers();
  }
  receiveDel(bool: boolean){
    console.log(bool);
    this.success = bool;
    this.onDel.subscribe(
      (data: boolean) => {
        this.success = data;
      }
    );
  }
}
