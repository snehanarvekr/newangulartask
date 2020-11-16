import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { cSinUp, Employee } from './class';

const headerOption = {
 headers:new HttpHeaders({'content-Type':'applicatio/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  baseURL="http://localhost:8080";
  mockUrl="http://localhost:3000/Employee"
   addPerson(param:any): Observable<any> {
    // const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(param);
    console.log(body)
    return this.http.post(this.baseURL , param)
  }

   GetProfile(param:cSinUp){
    return this.http.post('https://www.googleapis.com/drive/v2/files?access_token=access_token',param)  
   }


GetAllEmployees():Observable<any>{
  return this.http.get<any>(this.mockUrl, headerOption)
}

createEmployee(param:any):Observable<any>{
  console.log(param)
  return this.http.post(this.mockUrl,param)
}
  
UpdateEmployee(param:any):Observable<any>{
  console.log(param)
  return this.http.put(this.mockUrl + '/' +param.id ,param)
}


}
