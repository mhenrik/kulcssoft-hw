import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user/user.model';
import {UserService} from '../shared/user.service';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
  }

  onDeleteUser(user: User) {
    this.userService.deleteUser(user);
    this.dataService.deleteUserFromServer(user.id);
  }
}
