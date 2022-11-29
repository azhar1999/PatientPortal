import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAppointment } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) { }

  getAppointmentURL: string = "https://localhost:7005/Appointments";
  addAppointmentURL: string = "https://localhost:7005/Appointments";
  deleteAppointmentURL: string = "https://localhost:7005/Appointments";
  getAppointmentCountURL: string = "https://localhost:7005/Appointments/Count";

  getAllAppointments(page: number, pageSize: number): Observable<IAppointment> {

    return this.httpClient.get<IAppointment>(`${this.getAppointmentURL}/` + `${pageSize}` + `&${page}`)
  }

  addAppointment(appObject: any) {
    this.httpClient.post(this.addAppointmentURL, appObject, { responseType: "text" }).subscribe(response => {
      console.log(response);
      window.location.reload();
    },
      (error) => {
        console.log(error);
      }

    )
  }

  //softDelete is implemented
  deleteAppointment(appointmentId: any) {
    this.httpClient.patch(`${this.addAppointmentURL}` + `/${appointmentId}`, appointmentId, { responseType: "text" }).subscribe(response => {
      window.location.reload();

    })
  }
  getAppointmentCount() {
    return this.httpClient.get(this.getAppointmentCountURL);
  }

}
