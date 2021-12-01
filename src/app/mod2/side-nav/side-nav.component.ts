import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sideNav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css','../../app.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() public AccEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  ngThrowParam(text:string){
    this.AccEvent.emit(text);
    console.log("desde side nav: " + text);
  }
}
