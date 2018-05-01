
export class AuthService {
  token: string;
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login(response) {
    this.token = response['token'];
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  getToken(): string {
    return this.token;
  }
}
