import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { IAppointment } from 'src/app/interface';
import { AppointmentService } from 'src/app/services/appointment.service';
@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent implements OnInit {
  appointmentFormGroup!:FormGroup;

  constructor(public AppointmentModal:MatDialog,private appointment:AppointmentService) { }

  ngOnInit(): void {
    this.appointmentFormGroup = new FormGroup({
      AppointmentId: new FormControl('',Validators.required),
      PatientId: new FormControl('',Validators.required),
      Date: new FormControl('',Validators.required),
      StartTime: new FormControl('',Validators.required),
      EndTime: new FormControl('',Validators.required),
    });
  }
  submit(){
    this.AppointmentModal.closeAll()
    const appObject:IAppointment={
      appointmentId:this.appointmentFormGroup.value.AppointmentId,
      PatientId:this.appointmentFormGroup.value.PatientId,
      Date:this.appointmentFormGroup.value.Date,
      StartTime:this.appointmentFormGroup.value.StartTime,
      EndTime:this.appointmentFormGroup.value.EndTime,
      isDelete:'false'
    }

    this.appointment.addAppointment(appObject)
    window.location.reload();


  }

}
