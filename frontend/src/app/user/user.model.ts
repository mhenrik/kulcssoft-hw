export class User {

  private _userId: number;
  private _username: string;
  private _email: string;

  constructor(username: string, email: string) {
    this._username = username;
    this._email = email;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
