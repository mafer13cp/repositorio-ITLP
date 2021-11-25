import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'buttonReg',
  templateUrl: './buttonReg.component.html',
  styleUrls: ['./buttonReg.component.css','../../app.component.css']
})
export class ButtonRegComponent implements OnInit {

  @Input() text: string = "btn";
  constructor() { 
  }

  ngOnInit(): void {
  }

}
