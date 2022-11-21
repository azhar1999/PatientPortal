import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
@Component({
  selector: 'app-appointment-comp',
  templateUrl: './appointment-comp.component.html',
  styleUrls: ['./appointment-comp.component.css']
})
export class AppointmentCompComponent implements OnInit {

 

  constructor(public AppointmentModal:MatDialog) { }

  ngOnInit(): void {


  }
  

  openAppointmentModal(){
    this.AppointmentModal.open(AppointmentModalComponent)
  }

}
