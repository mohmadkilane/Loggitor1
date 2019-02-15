import { NgModule } from '@angular/core';
import { RouterActionsComponent } from './router-actions/router-actions.component';
import { AppComponent } from './app.component';
 import { RouterAdminComponent } from './router-admin/router-admin.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
 { path: 'loggitor', component: AppComponent},
 { path: 'actions', component: RouterActionsComponent},
 { path: 'admin', component: RouterAdminComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
