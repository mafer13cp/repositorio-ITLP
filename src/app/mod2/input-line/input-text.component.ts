import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'inputLine',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Output() public ComEvent= new EventEmitter();
  @ViewChild('inputText') inputField:ElementRef;

  @Input() desc:string="input";

  constructor() { }

  ngOnInit(): void {
  }
  ngOnInput() {
    const com = this.inputField.nativeElement.value
    this.ComEvent.emit(com);
    console.log("Comentario: " + com);
    this.inputField.nativeElement.value = "";
  }

}
