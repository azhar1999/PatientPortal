import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IPatient } from 'src/app/interface';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-modal',
  templateUrl: './patient-modal.component.html',
  styleUrls: ['./patient-modal.component.css']
})
export class PatientModalComponent implements OnInit {

  patientFormGroup!: FormGroup;
  formSubmit: boolean = false;
  ValidationMessages = {
    'DOB': {
      'DOBValidation': 'DOB not valid'
    }

  }

  constructor(public PatientModal: MatDialog, private patient: PatientService) { }

  ngOnInit(): void {
    this.patientFormGroup = new FormGroup({

      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      DOB: new FormControl('', [Validators.required, this.DOBValidation]),
      email: new FormControl('', [Validators.required, Validators.email]),
      SSN: new FormControl('', Validators.required)
    });
  }
  submit() {
    const patObject: IPatient = {

      FirstName: this.patientFormGroup.value.FirstName,
      LastName: this.patientFormGroup.value.LastName,
      DOB: this.patientFormGroup.value.DOB,
      email: this.patientFormGroup.value.email,
      SSN: this.patientFormGroup.value.SSN,
      isDelete: false,
    }


    if (this.patientFormGroup.valid) {
      console.log(patObject);

      this.patient.addPatient(patObject)
      this.PatientModal.closeAll()
      console.log("ValidForm");

    }
    else {
      this.formSubmit = true
      console.log("InvalidForm");
    }
  }

  close() {
    this.PatientModal.closeAll()

  }

  DOBValidation(control: AbstractControl): { [key: string]: any } | null {
    const DOB: any = control.value
    const currentDate = new Date()
    if (DOB > currentDate) {
      return { 'DOBInvalid': true };
    }
    return null;
  }





}
