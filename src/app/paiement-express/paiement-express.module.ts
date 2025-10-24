import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementExpressPageRoutingModule } from './paiement-express-routing.module';

import { PaiementExpressPage } from './paiement-express.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementExpressPageRoutingModule
  ],
  declarations: [PaiementExpressPage]
})
export class PaiementExpressPageModule {}
