import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { IndexComponent } from '../index/index.component';
import { EditComponent } from '../edit/edit.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

import { AuthGuardService } from '../services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    // runGuardsAndResolvers: 'always',
    // canActivate:[AuthGuardService],
    children: [
      {
        path: 'home',
        component: DashboardComponent
      }, 
      { 
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
