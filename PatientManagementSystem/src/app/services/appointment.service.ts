import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  getAppointmentURL:string="https://localhost:7005/Appointments";
  addAppointmentURL:string="https://localhost:7005/Appointments/details";
  deleteAppointmentURL:string ="https://localhost:7005/Patients/Delete";

  getAllAppointments():Observable<any>{
    return this.httpClient.get<any>(this.getAppointmentURL)
  }

  addAppointment(appObject:any){
    this.httpClient.post(this.addAppointmentURL,appObject,{responseType:"text"}).subscribe(response=>{
      window.location.reload();
      
    }) 
  }
  
  //softDelete is implemented
  deleteAppointment(id:any){
    this.httpClient.put(`https://localhost:7005/Appointments/SoftDelete?appid=${id}`,id,{responseType:"text"}).subscribe(response=>{
      window.location.reload();
      
    }) 
  }
  
}
