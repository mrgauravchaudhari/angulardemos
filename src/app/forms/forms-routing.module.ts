import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { FormsComponent } from './forms.component';
import { HtmlComponent } from './html/html.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

export const RoutingComponents = [FormsComponent, HtmlComponent, ReactiveComponent, TemplateDrivenComponent];

const routes: Routes = [ // sets up routes constant where you define your routes
  { path: '', redirectTo: 'type', pathMatch: 'full' },
  { path: 'type', component: FormsComponent },
  { path: 'html-bootstrap', component: HtmlComponent },
  { path: 'model-driven', component: ReactiveComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }