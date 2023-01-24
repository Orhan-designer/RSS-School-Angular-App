import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'login', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
