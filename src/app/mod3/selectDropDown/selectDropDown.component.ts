import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'selectDropDown',
  templateUrl: './selectDropDown.component.html',
  styleUrls: ['./selectDropDown.component.css']
})
export class SelectDropDownComponent implements OnInit {
  @Input() ops:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
