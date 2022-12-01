import { Component, OnInit } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { PatientService } from 'src/app/services/patient.service';
import { PatientModalComponent } from '../patient-modal/patient-modal.component';


@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {

  patientList!: any;
  page: number = 1;
  count: any = 0;
  pageSize: number = 6;


  constructor(public PatientModal: MatDialog, private patient: PatientService) { }

  ngOnInit(): void {

    this.patient.getPatientCount().subscribe(response => {
      this.count = response;
    })
    this.getPatientList(this.page);
  }
  getPatientList(page: number) {
    this.patient.getAllPatient(page, this.pageSize).subscribe((response) => {
      this.patientList = response;
    })
  }
  
  onPageDataChange(event: any) {
    this.page = event;
    this.getPatientList(this.page);
  }


  openPatientModal() {
    this.PatientModal.open(PatientModalComponent);

  }

  delete(patientId: number) {
    this.patient.deletePatient(patientId)
  }


  onPageClick(event: any) {
    console.log(event);
    
    this.page = event;
    this.getPatientList(this.page);
  }
  countMethod(page:any){
    
    if(page<1){
      return false
    }
    if((this.count-(page*this.pageSize))>0){
      return true
    }
    else{
      return false
    }
  }


}
