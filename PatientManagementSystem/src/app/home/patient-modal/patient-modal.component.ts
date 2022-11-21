import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-patient-modal',
  templateUrl: './patient-modal.component.html',
  styleUrls: ['./patient-modal.component.css']
})
export class PatientModalComponent implements OnInit {

  patientFormGroup!:FormGroup;

  constructor(public PatientModal:MatDialog) { }

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
    this.PatientModal.closeAll()

  }


}
