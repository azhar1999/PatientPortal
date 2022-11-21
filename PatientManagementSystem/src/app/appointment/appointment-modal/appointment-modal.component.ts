import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent implements OnInit {
  appointmentFormGroup!:FormGroup;

  constructor(public AppointmentModal:MatDialog) { }

  ngOnInit(): void {
    this.appointmentFormGroup = new FormGroup({
      PatientId: new FormControl('',Validators.required),
      StartTime: new FormControl('',Validators.required),
      EndTime: new FormControl('',Validators.required),
    });
  }
  submit(){
    this.AppointmentModal.closeAll()

  }

}
