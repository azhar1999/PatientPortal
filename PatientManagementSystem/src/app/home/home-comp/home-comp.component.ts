import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PatientService } from 'src/app/services/patient.service';
import { PatientModalComponent } from '../patient-modal/patient-modal.component';


@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {

  currPatient!:any;

  constructor(public PatientModal:MatDialog,private patient: PatientService) { }

  ngOnInit(): void {
    this.patient.getAllPatient().subscribe((response)=>{
      this.currPatient=response;
      
    })

  }
  openPatientModal(){
    this.PatientModal.open(PatientModalComponent);
   
  }
  delete(patientId:number){
    this.patient.deletePatient(patientId)
    window.location.reload();

  }

}
