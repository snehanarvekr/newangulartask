import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  Totalrow:number=0;
  finaloutput:Array<any>=[];
  ngOnInit(): void {
    
  }

  generatePyramid() {
    alert()
    var totalNumberofRows = this.Totalrow;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output = j + '  ';
        }
      
        console.log(output);
       
        this.finaloutput.push(output)
        console.log(this.finaloutput)
        output = '';
      
    
    }

    for (var i = 1; i >= totalNumberofRows; i--) {
      for (var j = 1; j >= i; j--) {
          output = j + '  ';
      }
    
      console.log(output);
     
      this.finaloutput.push(output)
      console.log(this.finaloutput)
      output = '';
    
  
  }

}

}
