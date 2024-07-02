import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMenuPage } from './dashboard-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMenuPageRoutingModule {}
