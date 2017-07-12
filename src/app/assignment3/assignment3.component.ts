import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .whiteColor{
      color : white;
    }
  `]
})
export class Assignment3Component implements OnInit {

  paraShow = false;
  log = [];
  
  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(){
    this.paraShow = !this.paraShow;
    this.log.push(this.log.length + 1);
  }

}
