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
    clientId: "303957815506-3cl8ln3tsfro1d420j0gmdtf71lrn8pn.apps.googleusercontent.com",
    redirectUrl: "http://localhost:4200/Signup",
   
  };
  constructor( private router:Router,) { 
   
  }

 
  ngOnInit(): void {
    
  }

onClick(){
  
  // window.location.href = `https://www.google.com/uas/oauth2/authorization?response_type=code&client_id=${
  //   this.linkedInCredentials.clientId}&redirect_uri=${this.linkedInCredentials.redirectUrl}&state=987654321`;


    window.location.href=' https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https://snehanarvekr.github.io/newangulartask/Signup&code&client_id=303957815506-3cl8ln3tsfro1d420j0gmdtf71lrn8pn.apps.googleusercontent.com'  
}
  // this.router.navigate(['Signup']);

  

}