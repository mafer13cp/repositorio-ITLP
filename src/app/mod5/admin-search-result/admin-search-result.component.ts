import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'adminSearchResult',
  templateUrl: './admin-search-result.component.html',
  styleUrls: ['./admin-search-result.component.css','../../app.component.css']
})
export class AdminSearchResultComponent implements OnInit {
  @Input() resultados:any[];
  @Input() tipo:string;
  @Output() public ASREvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngEnviarEvento(tipo:string){
    this.ASREvent.emit(tipo);
  }
}
