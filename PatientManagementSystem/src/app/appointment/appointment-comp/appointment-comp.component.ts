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
  pageSize: number = 6;

  constructor(public AppointmentModal: MatDialog, private Appointment: AppointmentService) { }

  ngOnInit(): void {

    this.Appointment.getAppointmentCount().subscribe((response: any) => {
      
      this.count = response

    })
    this.getAppointmentList(this.page);

  }


  //get appointmetList based on page number and page size
  getAppointmentList(page: number) {
    this.Appointment.getAllAppointments(page, this.pageSize).subscribe((response: any) => {
      this.appointmentList = response;
    })
  }

  //to change page datas 
  // onPageDataChange(event: any) {
  //   this.page = event;
  //   this.getAppointmentList(this.page);
  // }

  //to open modal
  openAppointmentModal() {
    this.AppointmentModal.open(AppointmentModalComponent)
  }

  //to delete appointment
  delete(appointmentId: number) {
    this.Appointment.deleteAppointment(appointmentId)
  }


  //countMethod to return next page is needed
  countMethod(page: any) {
    if (page < 1) {
      return false
    }
    if ((this.count - (page * this.pageSize)) > 0) {
      return true
    }
    else {
      return false
    }
  }

  //to change page datas 
  onPageClick(event: any) {
    this.page = event;
    this.getAppointmentList(this.page);
  }

}
