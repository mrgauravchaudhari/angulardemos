import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { HomeComponent } from './home/home.component';
import { LayoutAppComponent } from './includes/layout-app/layout-app.component';
import { LayoutAuthComponent } from './includes/layout-auth/layout-auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    component: LayoutAuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    component: LayoutAppComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'decorators', loadChildren: () => import('./decorators/decorators.module').then((as) => as.NgDecoratorsModule) },
      { path: 'life-cycle-hooks', loadChildren: () => import('./life-cycle-hooks/life-cycle-hooks.module').then((as) => as.NgLifeCycleHooksModule) },
      { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((as) => as.NgPipesModule) },
      { path: 'forms', loadChildren: () => import('./forms/forms.module').then((as) => as.NgFormsModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
