import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start/start.component';
import {UserListComponent} from './user-list/user-list.component';
import {NgModule} from '@angular/core';
import {UserRegisterComponent} from './user-register/user-register.component';
import {SignInComponent} from './sign-in/sign-in.component';



const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: UserRegisterComponent },
  { path: 'sign-in', component: SignInComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
