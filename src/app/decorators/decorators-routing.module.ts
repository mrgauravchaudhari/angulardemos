import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

export const RoutingComponents = [ParentComponent, ChildComponent];

const routes: Routes = [ // sets up routes constant where you define your routes
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputOutputRoutingModule { }