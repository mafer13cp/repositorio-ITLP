import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewDocAut',
  templateUrl: './viewDocAut.component.html',
  styleUrls: ['./viewDocAut.component.css']
})
export class ViewDocAutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngClickAcc(text: string)
  {
    console.log("desde view aut: " + text);
  }

  ngOnEdit(control: any)
  {
    console.log("editar desde view autor");
  }
  ngOnDelete(control: any)
  {
    console.log("eliminar desde view autor");
  }
}
