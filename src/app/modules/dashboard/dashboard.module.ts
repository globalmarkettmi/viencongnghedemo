import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CameraComponent } from './camera/camera.component';
import { TroubleCaseComponent } from './trouble-case/trouble-case.component';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';
import { ReporttimeComponent } from './reporttime/reporttime.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    CameraComponent,
    TroubleCaseComponent,
    CameraDetailComponent,
    ReporttimeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    NgbDatepickerModule,
    FormsModule
  ]
})
export class DashboardModule { }
