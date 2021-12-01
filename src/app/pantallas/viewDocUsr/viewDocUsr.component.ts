import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewDocUsr',
  templateUrl: './viewDocUsr.component.html',
  styleUrls: ['./viewDocUsr.component.css','../../app.component.css']
})
export class ViewDocUsrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngClickAcc(text: string)
  {
    console.log("desde view user: " + text);
  }
}
