import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardMenuPageRoutingModule } from './dashboard-menu-routing.module';

import { DashboardMenuPage } from './dashboard-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardMenuPageRoutingModule
  ],
  declarations: [DashboardMenuPage]
})
export class DashboardMenuPageModule {}
