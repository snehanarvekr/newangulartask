import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';
import { sectionClass, commentdetail} from './class'

@Component({
  selector: 'app-angulartask',
  templateUrl: './angulartask.component.html',
  styleUrls: ['./angulartask.component.css']
})
export class AngulartaskComponent implements OnInit {

  constructor(private FetchService:ServiceService) { }
commentData:any;
section2Data: sectionClass;
Newcomments: Array<any>=[];
commentDetail:commentdetail;
section3data:Array<any>=[];
section3FinalArray:Array<any>=[];
pageStart = 0;
  ngOnInit(): void {
    this.section2Data = new sectionClass()
    this.commentDetail = new  commentdetail()
  
    this.FetchService.fetchData().subscribe(data=>{
     this.commentData=data
    })
    
  }
  getData(obj){
   this.section2Data=obj
   this.Newcomments= new Array
  }
  AddComment(){
  
    this.commentDetail.status='pending';
    this.commentDetail.id=this.section2Data.id
    this.commentDetail.title = this.section2Data.title
    this.Newcomments.push(this.commentDetail)
    
    
   this.commentData.forEach(obj => {
     
   
    this.Newcomments.forEach(element => {
       
       if(obj.id==element.id){
           
           obj.Array=this.Newcomments
          
       }

      // this.commentData.filter(x=>x.id == element.id).concate(element)
      // console.log( this.commentData)
      
      // forEach(obj=>{
      //   // console.log(element[0].commentdetail)
      //   // obj.push(element)

      // })
     
       
    // });
    
    this.commentDetail = new  commentdetail()
   

  })
});
}
selectstatus(childobj,event){
  
  
  let index = this.section3data.indexOf(childobj);
        if (index === -1) {
            if (event.target.checked) {
              childobj.status='Moderation'
                 this.section3data.push(childobj);
            }
        } else {
            if (!event.target.checked) {
              childobj.status='Pending'
                this.section3data.splice(index, 1);
            }
        }

// this.section3FinalArray.push(this.section3data[0].title,this.section3data)
this.section3FinalArray = new Array;
this.section3FinalArray = this.section3data.map(o=>{
  return {title:this.section3data[0].title , Array:this.section3data}
})
 
let index2 = this.section3data.indexOf(childobj);
if (index2 === 1) {
 this.section3FinalArray.splice(index,1)
}

  // if (event.target.checked) {
  //  childobj.status='Moderation'
  // }else{
  //   childobj.status='Pending'
  // }
}
nextData() {
  this.pageStart += 10;           // Get the next 100 records
}

prevData() {
  this.pageStart -= 10;          // Get the previous 100 records
}
}