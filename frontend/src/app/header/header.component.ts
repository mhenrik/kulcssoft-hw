import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;
  loggedIn;

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedIn.subscribe(
      (data: boolean) => {
        this.loggedIn = data;
      }
    );
  }

  onFetchData() {
    this.dataService.getUsersFromServer();
    this.navbarCollapsed = true;
  }
}
