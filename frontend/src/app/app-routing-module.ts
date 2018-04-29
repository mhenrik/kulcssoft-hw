import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start/start.component';
import {UserListComponent} from './user-list/user-list.component';
import {NgModule} from '@angular/core';



const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'users', component: UserListComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
