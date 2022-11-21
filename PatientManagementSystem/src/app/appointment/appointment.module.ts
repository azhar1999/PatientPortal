import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentCompComponent } from './appointment-comp/appointment-comp.component';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppointmentCompComponent,
    AppointmentModalComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    ReactiveFormsModule
  ]
})
export class AppointmentModule { }
