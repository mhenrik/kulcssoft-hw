import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {DataService} from '../shared/data.service';
import {NgForm} from '@angular/forms';
import {User} from '../user/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  success = false;
  onClose = Observable.create(obs => {
    obs.next(false);
  }).delay(1500);


  constructor(private userService: UserService, private dataService: DataService) {}

  ngOnInit() {}

  onRegister(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const user = new User(username, email);
    this.userService.addUser(user);
    this.dataService.addUserToServer(user);
    form.reset();
    this.success = true;
    this.onClose.subscribe(
      (data: boolean) => {
        this.success = data;
      }
    );
  }
}


