import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from '../app.guard';

import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';

export const RoutingComponents = [
  LoginComponent,
  ResetComponent,
  ForgetComponent,
  RegisterComponent,
];

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: "login",
    component: LoginComponent,
    canActivate: [AppGuard]
  },
  {
    path: "reset",
    component: ResetComponent
  },
  {
    path: "forget",
    component: ForgetComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
