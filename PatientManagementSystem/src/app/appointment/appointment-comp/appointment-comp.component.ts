import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
@Component({
  selector: 'app-appointment-comp',
  templateUrl: './appointment-comp.component.html',
  styleUrls: ['./appointment-comp.component.css']
})
export class AppointmentCompComponent implements OnInit {

  appointmentList!: any;
  page: number = 1;
  count: number = 0;
  pageSize: number = 4;

  constructor(public AppointmentModal: MatDialog, private Appointment: AppointmentService) { }

  ngOnInit(): void {

    this.Appointment.getAppointmentCount().subscribe((response: any) => {

      this.count = response
    })
    this.getAppointmentList(this.page);

  }

  getAppointmentList(page: number) {

    this.Appointment.getAllAppointments(page, this.pageSize).subscribe((response: any) => {
      this.appointmentList = response;
      console.log(response);
      localStorage.setItem('patientList', JSON.stringify(this.appointmentList));

    })
  }


  onPageDataChange(event: any) {
    this.page = event;
    this.getAppointmentList(this.page);
  }

  openAppointmentModal() {
    this.AppointmentModal.open(AppointmentModalComponent)
  }

  delete(appointmentId: number) {
    this.Appointment.deleteAppointment(appointmentId)

  }

}
