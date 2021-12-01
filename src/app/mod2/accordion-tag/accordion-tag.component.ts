import { Component, OnInit, Input, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'accordionTag',
  templateUrl: './accordion-tag.component.html',
  styleUrls: ['./accordion-tag.component.css','../../app.component.css']
})
export class AccordionTagComponent implements OnInit {
  @Output() public AccEvent= new EventEmitter();
  texto: string ="";

  @Input() title: string = "title";
  @Input() listTags: string[]  = ['tag'];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnClick(control: any){
    //Mandar el valor del tag y el id de la selección
    this.texto = control.srcElement.childNodes[1].textContent;
    this.AccEvent.emit(this.texto);
    console.log("desde accordion tag: " + this.texto);
  }
}
