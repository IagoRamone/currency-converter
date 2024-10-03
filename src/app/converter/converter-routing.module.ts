import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConverterPage } from './converter.page';

const routes: Routes = [
  {
    path: '',
    component: ConverterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConverterPageRoutingModule {}
