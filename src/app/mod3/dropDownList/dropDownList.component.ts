import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'dropDownList',
  templateUrl: './dropDownList.component.html',
  styleUrls: ['./dropDownList.component.css','../../app.component.css']
})
export class DropDownListComponent implements OnInit {
  @Input() ops:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
