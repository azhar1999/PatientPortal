import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentCompComponent } from './appointment-comp/appointment-comp.component';

const routes: Routes = [{ path: '', component: AppointmentCompComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
