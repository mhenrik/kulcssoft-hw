import {Subject} from 'rxjs/Subject';

export class AuthService {
  token: string;
  loggedIn = new Subject<boolean>();

  isAuthenticated() {
    return this.token != null;
  }

  loginserv(response) {
    this.token = response['token'];
    this.loggedIn.next(true);
  }

  getToken(): string {
    return this.token;
    /*return this.token;*/
  }

  loginError(error1: string) {
    this.loggedIn.next(false);
  }
}
