import { Component, Input, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css','../../app.component.css']
})

export class AccordionComponent implements OnInit{
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
    console.log("desde accordion: " + texto);
  }
}
