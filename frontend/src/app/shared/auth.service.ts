
export class AuthService {
  token: string;
  loggedIn = false;

  isAuthenticated() {
    return this.token != null;
  }

  login(response) {
    this.token = response['token'];
    this.loggedIn = true;
  }

  getToken(): string {
    return this.token;
  }

  loginError(error1: string) {
    this.loggedIn = false;
  }
}
