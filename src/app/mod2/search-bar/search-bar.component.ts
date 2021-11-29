import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css','../../app.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() public SBEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngThrowParam(text:string){
    this.SBEvent.emit(text);
  }
}
