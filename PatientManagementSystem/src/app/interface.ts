import { Time } from "@angular/common";

export interface IPatient{
    PatientId:number,
    FirstName:string,
    LastName:string,
    DOB:string,
    email:string,
    SSN:string,
    isDelete:string
}

export interface IAppointment{
    appointmentId:number
    PatientId:number,
    Date:string,
    StartTime:string,
    EndTime:string,
    isDelete:string
   
}


