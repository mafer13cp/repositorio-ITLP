import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewDocPan',
  templateUrl: './viewDocPan.component.html',
  styleUrls: ['./viewDocPan.component.css','../../app.component.css']
})
export class ViewDocPanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngClickAcc(text: string)
  {
    console.log("desde view pan: " + text);
  }
}
