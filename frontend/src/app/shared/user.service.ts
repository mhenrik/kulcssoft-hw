import {User} from '../user/user.model';

export class UserService {
  private users: User[] = [];

  constructor() {}

  getUsers() {
    return this.users;
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  addUser(user: User) {
    this.users.push(user);
    return user;
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
