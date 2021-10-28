import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarCovidPageRoutingModule } from './reportar-covid-routing.module';

import { ReportarCovidPage } from './reportar-covid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarCovidPageRoutingModule
  ],
  declarations: [ReportarCovidPage]
})
export class ReportarCovidPageModule {}
