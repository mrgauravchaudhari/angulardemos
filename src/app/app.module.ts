import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutAppComponent } from './includes/layout-app/layout-app.component';
import { LayoutAuthComponent } from './includes/layout-auth/layout-auth.component';
import { LayoutFooterComponent } from './includes/layout-footer/layout-footer.component';
import { Error404Component } from './includes/errors/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppModule.rootComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static rootComponent = [
    LayoutAuthComponent, LayoutAppComponent, Error404Component,
    LayoutFooterComponent,
  ];

  constructor() { console.log("App Module Loaded...."); }
}
