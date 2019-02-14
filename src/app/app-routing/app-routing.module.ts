import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterActionsComponent } from './../router-actions/router-actions.component';
import { AppComponent } from './../app.component';
// import { RouterAdminComponent } from './../router-admin/router-admin.component';
import { RouterAdminComponent } from './../router-admin/router-admin.component';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'loggitor', component: AppComponent},
  { path: 'actions', component: RouterActionsComponent},
  { path: 'admin', component: RouterAdminComponent }
                         ];
@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
