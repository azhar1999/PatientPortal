import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PatientModalComponent } from '../patient-modal/patient-modal.component';


@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {

  constructor(public PatientModal:MatDialog) { }

  ngOnInit(): void {
  }
  openPatientModal(){
    this.PatientModal.open(PatientModalComponent)
  }

}
