import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  getPatientURL:string="https://localhost:7005/Patients";
  addPatientURL:string="https://localhost:7005/Patients/details";
  deletePatientURL:string ="https://localhost:7005/Patients/SoftDelete";

  constructor(private httpClient:HttpClient) { }


  getAllPatient():Observable<any>{
    return this.httpClient.get<any>(this.getPatientURL)
  }

  addPatient(patObject:any){
    this.httpClient.post(this.addPatientURL,patObject,{responseType:"text"}).subscribe(response=>{
      console.log(response);
      window.location.reload();
      
    })
  }

  //softDelete is implemented
  deletePatient(patId:number){
    this.httpClient.put(  `https://localhost:7005/Patients/SoftDelete?patid=${patId}`,{ patId },{responseType:"text"}).subscribe(response=>{
      console.log(response);
      window.location.reload();
      
    })

    
 
  }


}
