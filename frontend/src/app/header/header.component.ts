import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onFetchData() {
    this.dataService.getUsersFromServer();
  }
}
