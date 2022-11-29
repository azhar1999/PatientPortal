import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlConfig, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { any } from '@uirouter/angular';
import { async } from 'rxjs';
import { IAppointment } from 'src/app/interface';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentCompComponent } from '../appointment-comp/appointment-comp.component';
@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent implements OnInit {
  appointmentFormGroup!: FormGroup;
  formSubmit: boolean = false;

  appointmentList!: any;

  constructor(public AppointmentModal: MatDialog, private appointment: AppointmentService) { }

  ngOnInit(): void {

    this.appointmentFormGroup = new FormGroup({
      PatientId: new FormControl('', Validators.required),
      Date: new FormControl('', [Validators.required, this.DateValidation]),
      StartTime: new FormControl('', [Validators.required]),
      EndTime: new FormControl('', [Validators.required]),
    });
  }
  submit() {

    const appObject: IAppointment = {
      PatientId: this.appointmentFormGroup.value.PatientId,
      Date: this.appointmentFormGroup.value.Date,
      StartTime: this.appointmentFormGroup.value.StartTime,
      EndTime: this.appointmentFormGroup.value.EndTime,
      isDelete: false,
      isSent: false
    }

    if (this.appointmentFormGroup.valid) {
      this.appointment.addAppointment(appObject)
      this.AppointmentModal.closeAll()
      console.log("ValidForm");
    }
    else {
      this.formSubmit = true
      console.log("InvalidForm");
    }
  }

  close() {
    this.AppointmentModal.closeAll()
  }


  DateValidation(control: AbstractControl): { [key: string]: any } | null {
    const currentDate = new Date()
    const DateSelected: any = control.value
    if (currentDate >= DateSelected) {
      return { 'DateInvalid': true };
    }
    return null;
  }

}
