import { Time } from "@angular/common";

export interface IPatient{

    FirstName:string,
    LastName:string,
    DOB:string,
    email:string,
    SSN:string,
    isDelete:boolean
    
}

export interface IAppointment{
   
    PatientId:number,
    Date:string,
    StartTime:string,
    EndTime:string,
    isDelete:boolean,
    isSent:boolean
   
}


