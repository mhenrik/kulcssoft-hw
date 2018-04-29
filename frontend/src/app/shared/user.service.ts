import {User} from '../user/user.model';
import {Subject} from 'rxjs/Subject';

export class UserService {
  private users: User[] = [];
  usersChanged = new Subject<User[]>();

  constructor() {}

  getUsers() {
    return this.users;
  }

  setUsers(users: User[]) {
    this.users = users;
    this.usersChanged.next(this.users);
  }

  addUser(user: User) {
    this.users.push(user);
    return user;
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
