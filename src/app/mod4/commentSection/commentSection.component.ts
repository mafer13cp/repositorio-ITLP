import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'commentSection',
  templateUrl: './commentSection.component.html',
  styleUrls: ['./commentSection.component.css','../../app.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Output() public UserEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngThrowParam(text:string){
    this.UserEvent.emit(text);
    console.log("desde comment section: " + text);
  }

}
