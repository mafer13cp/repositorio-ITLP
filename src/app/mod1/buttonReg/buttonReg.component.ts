import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'buttonReg',
  templateUrl: './buttonReg.component.html',
  styleUrls: ['./buttonReg.component.css']
})
export class ButtonRegComponent implements OnInit {

  @Input() texto:String;
  constructor() { 
    this.texto="";
  }

  ngOnInit(): void {
  }

}
