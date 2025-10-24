import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAbonnementPage } from './add-abonnement.page';

const routes: Routes = [
  {
    path: '',
    component: AddAbonnementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAbonnementPageRoutingModule {}
