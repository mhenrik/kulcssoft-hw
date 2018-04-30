import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { StartComponent } from './start/start.component';
import {AppRoutingModule} from './app-routing-module';
import {UserService} from './shared/user.service';
import {DataService} from './shared/data.service';
import {HttpClientModule} from '@angular/common/http';
import { UserRegisterComponent } from './user-register/user-register.component';
import {FormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import {AuthService} from './shared/auth.service';
import {AuthGuard} from './shared/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserItemComponent,
    UserListComponent,
    StartComponent,
    UserRegisterComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [UserService, DataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
