import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
@Component({
  selector: 'app-appointment-comp',
  templateUrl: './appointment-comp.component.html',
  styleUrls: ['./appointment-comp.component.css']
})
export class AppointmentCompComponent implements OnInit {

 appointment!:any

  constructor(public AppointmentModal:MatDialog,private Appointment: AppointmentService) { }

  ngOnInit(): void {
    this.Appointment.getAllAppointments().subscribe((response)=>{
      this.appointment=response;
      console.log(response);
    })
  }
  

  openAppointmentModal(){
    this.AppointmentModal.open(AppointmentModalComponent)
  }

  delete(appointmentId:number){
    this.Appointment.deleteAppointment(appointmentId)
  
  }
}
