import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'docSideInfo',
  templateUrl: './doc-side-info.component.html',
  styleUrls: ['./doc-side-info.component.css','../../app.component.css']
})
export class DocSideInfoComponent implements OnInit {
  @Output() public AccEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngThrowParam(text:string){
    this.AccEvent.emit(text);
    console.log("desde doc info: " + text);
  }
}
