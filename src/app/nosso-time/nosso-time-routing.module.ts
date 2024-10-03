import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NossoTimePage } from './nosso-time.page';

const routes: Routes = [
  {
    path: '',
    component: NossoTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NossoTimePageRoutingModule {}
