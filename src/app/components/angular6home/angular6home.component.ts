import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import {Employee} from '../../class'
@Component({
  selector: 'app-angular6home',
  templateUrl: './angular6home.component.html',
  styleUrls: ['./angular6home.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class Angular6homeComponent implements OnInit {
  imageUrl: string ="assets/images/defaultprofile.jpg";
  FileToUpload : File = null;
  closeResult = ''; 
  slidervalue:number;
  skills = [];
  newSkill='';
  formModal:Employee;
  constructor(private modalService: NgbModal,config: NgbModalConfig, private empservice:ServiceService ,private router:Router) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
 
  ngOnInit(): void {
   this.getAllEmployee()
   this.formModal=new Employee()
  }
 


  //  open(content) {
  //   this.modalService.open(content);
  // }
  open(content) { 
    this.modalService.open(content, 
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=> { 
      this.closeResult = `Closed with: ${result}`; 
    }, (reason) => { 
      this.closeResult =  
         `Dismissed ${this.getDismissReason(reason)}`; 
    }); 
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

getAllEmployee(){
  this.empservice.GetAllEmployees().subscribe(data=>{
    console.log(data);
    let last= data[data.length-1];
    console.log('last',last)

  //  this.imageUrl= data[5].Image
  //  this.slidervalue=data[5].Age
  //  this.formModal=data[5]
  //  this.skills= data[5].tag

  })
}

createemployee(){
  this.formModal.Image=this.imageUrl
  this.formModal.Age = this.slidervalue;
  this.formModal.tag= this.skills
  console.log(this.formModal.firstName)

  if(this.formModal.firstName==undefined || this.formModal.LastName==undefined){
    alert('please enter Name')
  }else{
     this.empservice.createEmployee(this.formModal).subscribe();
     this.router.navigate(['UserProfile'])
  }
 
}

}


