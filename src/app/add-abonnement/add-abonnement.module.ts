import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAbonnementPageRoutingModule } from './add-abonnement-routing.module';

import { AddAbonnementPage } from './add-abonnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAbonnementPageRoutingModule
  ],
  declarations: [AddAbonnementPage]
})
export class AddAbonnementPageModule {}
