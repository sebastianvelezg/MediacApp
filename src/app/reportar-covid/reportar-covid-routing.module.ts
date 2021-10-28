import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarCovidPage } from './reportar-covid.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarCovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarCovidPageRoutingModule {}
