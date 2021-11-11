import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'inputText',
  templateUrl: './inputText.component.html',
  styleUrls: ['./inputText.component.css','../../app.component.css']
})
export class InputTextComponent implements OnInit {
 
  @Input() texto:String;
  constructor() { 
    this.texto="Ingresar usuario";
  }

  ngOnInit(): void {
  }

}
