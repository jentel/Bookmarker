import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { IndexComponent } from '../index/index.component';
import { EditComponent } from '../edit/edit.component';

const appRoutes: Routes = [
  { path: 'create',
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
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
