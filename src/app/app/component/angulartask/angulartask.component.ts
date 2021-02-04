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
commentData:any
section2Data: sectionClass;
Newcomments: Array<any>=[];
commentDetail:commentdetail;

  ngOnInit(): void {
    this.section2Data = new sectionClass()
    this.commentDetail = new  commentdetail()
  
    this.FetchService.fetchData().subscribe(data=>{
      console.log(data)
      this.commentData=data
    })
    
  }
  getData(obj){
    console.log(obj)
    
    this.section2Data=obj
    console.log(this.section2Data)
  }
  AddComment(){
    console.log(this.section2Data)
    this.commentDetail.status='pending';
    this.commentDetail.id=this.section2Data.id
    this.Newcomments.push(this.commentDetail)
    console.log(this.Newcomments)
    
   
    this.Newcomments.forEach(element => {
      
      this.commentData.filter(x=>x.id == element.id)
      console.log( this.commentData)
      this.commentData.push(element)
      // forEach(obj=>{
      //   // console.log(element[0].commentdetail)
      //   // obj.push(element)

      // })
     
       
    });
    this.commentDetail = new  commentdetail()
   

    console.log(this.commentData)
  }
}
