import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { IndexComponent } from '../index/index.component';

const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
