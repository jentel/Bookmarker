import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../components/create/create.component';
import { IndexComponent } from '../components/index/index.component';
// import { EditComponent } from '../components/edit/edit.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

import { AuthGuardService } from '../services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate:[AuthGuardService],
  //   children: [
  //     {
        path: 'home',
        canActivate:[AuthGuardService],
        component: DashboardComponent
      }, 
      { 
        path: 'create',
        canActivate:[AuthGuardService],
        component: CreateComponent
      },
      {
        path: 'index',
        canActivate:[AuthGuardService],
        component: IndexComponent
      },
      // {
      //   path: 'edit/:id',
      //   component: EditComponent
      // }
  //   ]
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }