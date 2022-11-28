import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LifeCycleHooksComponent } from './life-cycle-hooks.component';

const routes: Routes = [ // sets up routes constant where you define your routes
  { path: '', redirectTo: 'type', pathMatch: 'full' },
  { path: 'type', component: LifeCycleHooksComponent },
  { path: 'ng-onInit', loadChildren: () => import('./ng-onInit/ng-onInit.module').then((as) => as.NgOnInitModule) },
  { path: 'ng-onDestroy', loadChildren: () => import('./ng-onDestroy/ng-onDestroy.module').then((as) => as.NgOnDestroyModule) },
  { path: 'ng-onChanges', loadChildren: () => import('./ng-onChanges/ng-onChanges.module').then((as) => as.NgOnChangesModule) },
  { path: 'ng-doCheck', loadChildren: () => import('./ng-doCheck/ng-doCheck.module').then((as) => as.NgDoCheckModule) },
  { path: 'ng-afterContent', loadChildren: () => import('./ng-afterContent/ng-afterContent.module').then((as) => as.NgAfterContentModule) },
  { path: 'ng-afterView', loadChildren: () => import('./ng-afterView/ng-afterView.module').then((as) => as.NgAfterViewModule) },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleHooksRoutingModule { }