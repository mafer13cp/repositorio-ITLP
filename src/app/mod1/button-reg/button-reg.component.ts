import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-button-reg',
  templateUrl: './button-reg.component.html',
  styleUrls: ['./button-reg.component.css']
})
export class ButtonRegComponent implements OnInit {

  @Input() texto:String;
  constructor() { 
    this.texto="";
  }

  ngOnInit(): void {
  }

}
