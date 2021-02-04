import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment} from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient ,) { }
  url:'jsonplaceholder.typicode.com/posts'
fetchData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  // fetch('https://jsonplaceholder.typicode.com/posts').then(res=>{
    
  //   console.log(res)
  // })
    
}

}
