import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonneClicPageRoutingModule } from './abonne-clic-routing.module';

import { AbonneClicPage } from './abonne-clic.page';
import { AbonneClicOffersComponent } from '../abonne-clic-offers/abonne-clic-offers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonneClicPageRoutingModule,
  ],
  declarations: [AbonneClicPage, AbonneClicOffersComponent],
})
export class AbonneClicPageModule {}
