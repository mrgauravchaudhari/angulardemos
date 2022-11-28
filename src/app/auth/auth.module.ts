import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule, RoutingComponents } from './auth-routing.module';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [RoutingComponents],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [AuthRoutingModule],
  providers: [LoginService]
})
export class AuthModule {
  constructor() { console.log("Auth Module Loaded...."); }
}