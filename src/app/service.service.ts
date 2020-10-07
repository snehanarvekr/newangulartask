import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { cSinUp } from './class';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  baseURL="http://localhost:8080"
   addPerson(param:any): Observable<any> {
    // const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(param);
    console.log(body)
    return this.http.post(this.baseURL , param)
  }

   GetProfile(param:cSinUp){
    return this.http.post('https://www.linkedin.com/oauth/v2/accessToken', param)  
   }


  
}
