import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatient } from '../interface';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  getPatientURL: string = "https://localhost:7005/Patients";
  getPatientCountURL: string = "https://localhost:7005/Patients/Count";
  addPatientURL: string = "https://localhost:7005/Patients";
  deletePatientURL: string = "https://localhost:7005/Patients";

  constructor(private httpClient: HttpClient) { }


  getAllPatient(page: number, pageSize: number): Observable<IPatient> {
    return this.httpClient.get<IPatient>(`${this.getPatientURL}/` + `${pageSize}` + `&${page}`)
  }

  addPatient(patObject: any) {
    this.httpClient.post(this.addPatientURL, patObject, { responseType: "text" }).subscribe(response => {
      console.log(response);
      window.location.reload();
    },
      (error) => {
        console.log(error);
      }
    )
  }

  //softDelete is implemented
  deletePatient(patientId: number) {
    this.httpClient.patch(`${this.deletePatientURL}` + `/${patientId}`, { patientId }, { responseType: "text" }).subscribe(response => {
      console.log(response);
      window.location.reload();

    })
  }

  getPatientCount() {
    return this.httpClient.get(this.getPatientCountURL);
  }


}
