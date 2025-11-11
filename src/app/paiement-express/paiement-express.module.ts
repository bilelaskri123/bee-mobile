import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementExpressPageRoutingModule } from './paiement-express-routing.module';

import { PaiementExpressPage } from './paiement-express.page';
import { PaiementExpressFormPage } from '../paiement-express-form/paiement-express-form.page';
import { PaiementExpressListPage } from '../paiement-express-list/paiement-express-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaiementExpressPageRoutingModule,
  ],
  declarations: [
    PaiementExpressPage,
    PaiementExpressFormPage,
    PaiementExpressListPage,
  ],
})
export class PaiementExpressPageModule {}
