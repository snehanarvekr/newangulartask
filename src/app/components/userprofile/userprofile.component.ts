import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import {NgbModal, ModalDismissReasons,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/class';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  imageUrl:string;
  Name:string;
  Age:number;
  parastring:string;
  Email:string;
  tagarray:Array<any>=[];
  PhoneNo:number;
  FileToUpload : File = null;
  closeResult = ''; 
  formModal:Employee;
  slidervalue:number;
  skills = [];
  newSkill='';
  constructor(private empservice:ServiceService, private modalService: NgbModal,config: NgbModalConfig, private router: Router ) { }

  ngOnInit(): void {
    this.formModal=new Employee()
    this.getAllEmployee()
  
  }
  getAllEmployee(){
    this.empservice.GetAllEmployees().subscribe(data=>{
      console.log(data);
      let last= data[data.length-1];
      console.log('last',last)
  
     this.imageUrl= last.Image
     this.Name=last.firstName + ' '+ last.LastName
     this.Age = last.Age
     this.Email = last.Email
     this.PhoneNo = last.phoneNo
     this.tagarray= last.tag

      this.parastring ='I am' + ' '+ this.Name +' ' +'and i am above ' + ' ' +this.Age + ' ' +'years old and you can send me email to' + ' ' + this.Email + ' '  + 'Please reach out me on my phone no' +' ' +this.PhoneNo + '.'

       this.formModal=last


     this.slidervalue=last.Age
     this.imageUrl= last.Image
     this.skills= last.tag
  
    })
  }
  open(content) { 
    this.modalService.open(content, 
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=> { 
      this.closeResult = `Closed with: ${result}`; 
    }, (reason) => { 
      this.closeResult =  
         `Dismissed ${this.getDismissReason(reason)}`; 
    }); 
    this.getAllEmployee()
  } 
  
  private getDismissReason(reason: any): string { 
    if (reason === ModalDismissReasons.ESC) { 
      return 'by pressing ESC'; 
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) { 
      return 'by clicking on a backdrop'; 
    } else { 
      return `with: ${reason}`; 
    } 
  } 


  handleFileInput(file: FileList){
    this.FileToUpload = file.item(0);
    var reader = new FileReader()
    reader.onload = (event:any)=>{
      this.imageUrl=event.target.result
    }
    reader.readAsDataURL(this.FileToUpload)
  }

  Updateemployee(){

    this.formModal.Image=this.imageUrl
    this.formModal.Age = this.slidervalue;
    this.formModal.tag= this.skills
    console.log(this.formModal)
    this.empservice.UpdateEmployee(this.formModal).subscribe();
    this.router.navigate(['UserProfile'])
  }
  slidercheck(value){
    console.log(value)
    this.slidervalue=value
  }
  addSkill(){
    alert()
    this.skills.push({'title': this.newSkill, 'done':false})
    console.log(this.newSkill)
     this.newSkill = ''
    console.log(this.skills)
  }
  deleteSkill(index) {	
    this.skills.splice(index, 1);
  }

 checkNum(event)
{

if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8)
   return true;
else
   {
       alert("Please enter only char");
       return false;
   }

}
homePage(){
  this.router.navigate(['/Home'])
}

}
