import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbonneClicPage } from './abonne-clic.page';

const routes: Routes = [
  {
    path: '',
    component: AbonneClicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbonneClicPageRoutingModule {}
