import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../shared/data.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  alertType;
  alertMessage;
  success = false;
  onSuccess = Observable.create(obs => {
    obs.next(false);
  }).delay(1500);


  constructor(private dataService: DataService, private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.dataService.login(username, password).subscribe
      (response => {
          form.reset();
          this.alertType = 'success';
          this.alertMessage = 'Welcome!';
          this.success = true;
          this.onSuccess.subscribe(
            (data) => {
              this.success = data;
              this.route.navigate(['/']);
            }
          );
          this.authService.login(response);
        },
        error1 => {
          this.authService.loginError(error1);
          form.reset();
          this.success = true;
          this.alertType = 'danger';
          this.alertMessage = 'Invalid username or password.';
          this.onSuccess.subscribe(
            (data) => {
              this.success = data;
            }
          );
        }
      );
  }
}
