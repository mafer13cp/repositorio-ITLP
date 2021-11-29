import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchField',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css','../../app.component.css']
})
export class SearchFieldComponent implements OnInit {
  @Output() public SFEvent= new EventEmitter();
  @ViewChild('searchField') searchField:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnClick(){
    this.SFEvent.emit(this.searchField.nativeElement.value);;
  }
}
