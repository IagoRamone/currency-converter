import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConverterPageRoutingModule } from './converter-routing.module';

import { ConverterPage } from './converter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConverterPageRoutingModule
  ],
  declarations: [ConverterPage]
})
export class ConverterPageModule {}
