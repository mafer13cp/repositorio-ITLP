import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'specificSearch',
  templateUrl: './specificSearch.component.html',
  styleUrls: ['./specificSearch.component.css','../../app.component.css']
})
export class SpecificSearchComponent implements OnInit {
  @Output() SSEvent = new EventEmitter;
  @Output() SSEvent2 = new EventEmitter;

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngEnviarFiltro(filtro:string){
    this.SSEvent.emit(filtro);
  }

  ngEnviarTexto(texto:string){
    this.SSEvent2.emit(texto);
  }
}
