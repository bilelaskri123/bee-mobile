import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FacturesPageRoutingModule } from './factures-routing.module';
import { FacturesPage } from './factures.page';
import { FactureListPage } from '../facture-list/facture-list.page';
import { FactureFormPage } from '../facture-form/facture-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturesPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FacturesPage, FactureFormPage, FactureListPage],
})
export class FacturesPageModule {}
