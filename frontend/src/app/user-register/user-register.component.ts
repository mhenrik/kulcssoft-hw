import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {DataService} from '../shared/data.service';
import {NgForm} from '@angular/forms';
import {User} from '../user/user.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const user = new User(username, email);
    this.userService.addUser(user);
    this.dataService.addUserToServer(user);
    form.reset();
  }
}
