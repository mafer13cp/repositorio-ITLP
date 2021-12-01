import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'docSideInfoAut',
  templateUrl: './doc-side-info-aut.component.html',
  styleUrls: ['./doc-side-info-aut.component.css','../../app.component.css']
})
export class DocSideInfoAutComponent implements OnInit {
  @Output() public AccEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngThrowParam(text:string){
    this.AccEvent.emit(text);
    console.log("desde doc info aut: " + text);
  }
}
