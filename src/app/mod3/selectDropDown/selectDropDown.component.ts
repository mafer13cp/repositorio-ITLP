import { Component, OnInit,Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'selectDropDown',
  templateUrl: './selectDropDown.component.html',
  styleUrls: ['./selectDropDown.component.css','../../app.component.css']
})
export class SelectDropDownComponent implements OnInit {
  @Input() tags:string[] = [];
  @Output() public SDDEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngEnviarTags(tags:string[]){
    this.SDDEvent.emit(tags);
  }

}
