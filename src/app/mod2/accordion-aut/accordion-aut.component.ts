import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'accordionAut',
  templateUrl: './accordion-aut.component.html',
  styleUrls: ['./accordion-aut.component.css','../../app.component.css']
})
export class AccordionAutComponent implements OnInit {
  @Output() public AccEvent= new EventEmitter();

  @Input() title: string = "title";
  @Input() listItems: string[] = ['item'];

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnClick(control: any){
    //Mandar el valor del tittle (tags, materia o docs) y el id de la selección
    const texto = control.srcElement.innerHTML;
    this.AccEvent.emit(texto);
    console.log("desde accordion aut: " + texto);
  }
  ngOnEdit(control: any){
    //Mandar el valor del tittle (tags, materia o docs) y el id de la selección
    const texto = control.srcElement.innerHTML;
    this.AccEvent.emit(texto);
    console.log("desde accordion aut: " + texto);
  }
}
