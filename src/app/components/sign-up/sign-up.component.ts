import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cSinUp} from '../../class';
import { ServiceService} from '../../service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  linkedInToken = "";
  constructor( private router:Router, private abc:ServiceService,  private route: ActivatedRoute
    ) { }
  FormModel:cSinUp;
  ngOnInit(): void {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
    console.log(this.linkedInToken)
    this.FormModel= new cSinUp()
  //  this.socialSignIn('linkedin')
      this.FormModel.Name="Sneha Narvekar"
      this.FormModel.EmailId= "narvekarsneha2888@gmail.com"
   
    this.FormModel.client_id = '78oi7jcjeet0ix'
    this.FormModel.client_secret='IYEcofOuB9jsJtUs'
   // this.FormModel.redirect_uri = 'http://localhost:4200/Signup';
   // this.FormModel.code=  this.linkedInToken

    console.log(this.FormModel);
      this.abc.GetProfile(this.FormModel).subscribe(data=>{
      console.log(data)

})
   

    
  }

  // socialSignIn(socialPlatform : string){
  //   let socialPlatformProvider;
  //   if (socialPlatform == "linkedin") {
  //     socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
  //   }
  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => {
  //       console.log(socialPlatform+" sign in data : " , userData);
  //       // Now sign-in with userData
  //       // ...
            
  //     }
  //   );
  // }


  Signup(){
     console.log(this.FormModel)
     this.abc.addPerson(this.FormModel).subscribe(data=>{
            console.log(data)
     })
  
   if(this.FormModel.Name!=undefined && this.FormModel.EmailId!=undefined && this.FormModel.PhoneNo!=undefined){
    this.router.navigate(['AccessCopy']);

   }else{
     alert('All Fields are required')
   }
    
  }
}
