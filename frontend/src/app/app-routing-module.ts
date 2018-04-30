import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start/start.component';
import {UserListComponent} from './user-list/user-list.component';
import {NgModule} from '@angular/core';
import {UserRegisterComponent} from './user-register/user-register.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthGuard} from './shared/auth-guard.service';



const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'new-user', canActivate: [AuthGuard], component: UserRegisterComponent },
  { path: 'login', component: SignInComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
