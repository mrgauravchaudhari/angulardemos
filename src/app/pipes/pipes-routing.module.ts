import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PipesComponent } from './pipes.component';

const routes: Routes = [ // sets up routes constant where you define your routes
  { path: '', redirectTo: 'type', pathMatch: 'full' },
  { path: 'type', component: PipesComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }