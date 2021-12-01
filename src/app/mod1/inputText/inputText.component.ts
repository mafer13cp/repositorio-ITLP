import { Component, OnInit, Input,Output,EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';

@Component({
  selector: 'inputText',
  templateUrl: './inputText.component.html',
  styleUrls: ['./inputText.component.css','../../app.component.css']
})
export class InputTextComponent implements OnInit {
  @Output() public ITEvent = new EventEmitter();
  @Input() text :string = "Ingresar texto:";
  @ViewChild('texto') texto:ElementRef;
  @Input() tipo:string = "texto";

  constructor() { 
  }

  ngOnInit(): void {
    setTimeout(() => {
    this.texto.nativeElement.type = this.tipo;
    }, 50);
  }

  ngEnviarTexto(){
    this.ITEvent.emit(this.texto.nativeElement.value);
  }
}
