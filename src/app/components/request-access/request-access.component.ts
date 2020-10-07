import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.css']
})
export class RequestAccessComponent implements OnInit {
  linkedInCredentials = {
    clientId: "78oi7jcjeet0ix",
    redirectUrl: "http://localhost:4200/Signup",
    Code  :"IYEcofOuB9jsJtUs"
  };
  constructor( private router:Router,) { 
   
  }

 
  ngOnInit(): void {
    
  }

onClick(){
  
  window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
    this.linkedInCredentials.clientId}&redirect_uri=${this.linkedInCredentials.redirectUrl}&state=987654321`;
}
  // this.router.navigate(['Signup']);

  

}