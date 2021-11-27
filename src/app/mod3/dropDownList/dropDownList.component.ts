import { Component, OnInit,Input,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'dropDownList',
  templateUrl: './dropDownList.component.html',
  styleUrls: ['./dropDownList.component.css','../../app.component.css']
})
export class DropDownListComponent implements OnInit {
  @Input() ops:string[] = ["Opcion 1","Opcion 2","Opcion 3"];
  @ViewChild('btn') boton:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnSelectEvent(control:any){
    const texto = control.srcElement.innerHTML;
    this.boton.nativeElement.innerHTML = texto;
  }

}
