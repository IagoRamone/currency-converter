import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NossoTimePageRoutingModule } from './nosso-time-routing.module';

import { NossoTimePage } from './nosso-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NossoTimePageRoutingModule
  ],
  declarations: [NossoTimePage]
})
export class NossoTimePageModule {}
