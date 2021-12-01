import { Component, OnInit,Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'largeInputText',
  templateUrl: './largeInputText.component.html',
  styleUrls: ['./largeInputText.component.css','../../app.component.css']
})
export class LargeInputTextComponent implements OnInit {
  @Output() public LITEvent = new EventEmitter();
  @ViewChild('texto') texto:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngEnviarTexto(){
    this.LITEvent.emit(this.texto.nativeElement.value);
  }
}
