import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'accordionTagAut',
  templateUrl: './accordion-tag-aut.component.html',
  styleUrls: ['./accordion-tag-aut.component.css','../../app.component.css']
})
export class AccordionTagAutComponent implements OnInit {
  @Output() public AccEvent= new EventEmitter();
  texto: string ="";

  @Input() title: string = "title";
  @Input() listTags: string[]  = ['tag'];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnClick(control: any){
    //Mandar el valor del tag y el id de la selección para modificar
    this.texto = control.srcElement.childNodes[1].textContent;
    this.AccEvent.emit(this.texto);
    console.log("desde accordion tag aut: " + this.texto);
  }
  ngOnEdit(control: any){
    //Mandar el valor del tittle (tags, materia o docs) y el id de la selección
    const texto = control.srcElement.innerHTML;
    this.AccEvent.emit(texto);
    console.log("desde accordion aut: " + texto);
  }
}
