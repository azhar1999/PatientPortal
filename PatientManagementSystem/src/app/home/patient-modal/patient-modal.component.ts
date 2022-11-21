import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { IPatient } from 'src/app/interface';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-modal',
  templateUrl: './patient-modal.component.html',
  styleUrls: ['./patient-modal.component.css']
})
export class PatientModalComponent implements OnInit {

  patientFormGroup!:FormGroup;

  constructor(public PatientModal:MatDialog,private patient:PatientService) { }

  ngOnInit(): void {
    this.patientFormGroup = new FormGroup({
      PatientId: new FormControl('',Validators.required),
      FirstName: new FormControl('',Validators.required),
      LastName: new FormControl('',Validators.required),
      DOB: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      SSN: new FormControl('',Validators.required)
    });
  }
  submit(){
    const patObject:IPatient={
      PatientId:this.patientFormGroup.value.PatientId,
      FirstName:this.patientFormGroup.value.FirstName,
      LastName:this.patientFormGroup.value.LastName,
      DOB:this.patientFormGroup.value.DOB,
      email:this.patientFormGroup.value.email,
      SSN:this.patientFormGroup.value.SSN,
      isDelete:'false'
    }
    this.PatientModal.closeAll()
    this.patient.addPatient(patObject)
 
  }


}
