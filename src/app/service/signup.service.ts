import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  
  constructor(private http: HttpClient) { }

  // addPerson(param:any): Observable<any> {
  //   // const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(param);
  //   console.log(body)
  //   return this.http.post(this.baseURL , param)
  // }
}
