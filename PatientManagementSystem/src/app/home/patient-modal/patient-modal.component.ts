import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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

  ValidationMessages ={
    'DOB':{
      'DOBValidation':'DOB not valid'
    }

  }

  constructor(public PatientModal:MatDialog,private patient:PatientService) { }

  ngOnInit(): void {
    this.patientFormGroup = new FormGroup({
      PatientId: new FormControl('',Validators.required),
      FirstName: new FormControl('',Validators.required),
      LastName: new FormControl('',Validators.required),
      DOB: new FormControl('',[Validators.required,this.DOBValidation]),
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

  DOBValidation(control: AbstractControl): {[key:string]:any} | null{
    const DOB:string = control.value
    const datedob = new Date(DOB)
    const start1=new Date()
    if(datedob>start1){
      return {'DOBInvalid':true};
    }
    return null;

   }


 


}
