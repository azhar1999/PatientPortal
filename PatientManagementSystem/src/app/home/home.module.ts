import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { PatientModalComponent } from './patient-modal/patient-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeCompComponent,
    PatientModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class HomeModule { }
