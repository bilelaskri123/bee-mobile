import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendMessagePageRoutingModule } from './send-message-routing.module';

import { SendMessagePage } from './send-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SendMessagePageRoutingModule,
  ],
  declarations: [SendMessagePage],
})
export class SendMessagePageModule {}
