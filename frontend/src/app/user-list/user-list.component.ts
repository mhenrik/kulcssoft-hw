import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    new User('user1', 'email1@email.com'),
    new User('user2', 'email2@email.com'),
    new User('user3', 'email3@email.com'),

  ]

  constructor() { }

  ngOnInit() {
  }

}
