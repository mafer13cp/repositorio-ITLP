import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'inputText',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
 
  @Input() texto:String;
  constructor() { 
    this.texto="";
  }

  ngOnInit(): void {
  }

}
