import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonneClicPageRoutingModule } from './abonne-clic-routing.module';

import { AbonneClicPage } from './abonne-clic.page';
import { AbonneClicOffersComponent } from '../abonne-clic-offers/abonne-clic-offers.component';
import { AbonneClicFirstFormComponent } from '../abonne-clic-first-form/abonne-clic-first-form.component';
import { AbonneClicSecondFormComponent } from '../abonne-clic-second-form/abonne-clic-second-form.component';
import { AbonneClicThirdFormComponent } from '../abonne-clic-third-form/abonne-clic-third-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AbonneClicPageRoutingModule,
  ],
  declarations: [
    AbonneClicPage,
    AbonneClicOffersComponent,
    AbonneClicFirstFormComponent,
    AbonneClicSecondFormComponent,
    AbonneClicThirdFormComponent,
  ],
})
export class AbonneClicPageModule {}
