import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ProtectedModule } from './protected/protected.module';

const routes: Routes = [

    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => AuthModule)
    },
    {

      path: 'dashboard',
      loadChildren: () => import('./protected/protected.module').then(m => ProtectedModule)
    },
    {
      path: '**',
      redirectTo: 'dashboards'
    }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
