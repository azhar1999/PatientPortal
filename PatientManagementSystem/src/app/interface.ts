import { Time } from "@angular/common";

export interface IPatient{
    PatientId:number,
    FirstName:string,
    LastName:string,
    DOB:Date,
    email:string,
    SSN:string
}

export interface IAppointment{
    PatientId:number,
    StartTime:Time,
    EndTime:Time
   
}


