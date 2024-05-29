import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CameraComponent } from './camera/camera.component';
import { TroubleCaseComponent } from './trouble-case/trouble-case.component';
import { ReporttimeComponent } from './reporttime/reporttime.component';

const routes: Routes = [
  {path: "", component:  DashboardComponent},
  {path: "cameras", component:  CameraComponent},
  {path: "reports", component:  ReporttimeComponent},
  {path: "cases", component: TroubleCaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
