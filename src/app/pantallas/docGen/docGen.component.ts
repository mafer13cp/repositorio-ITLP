import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interfaces/documento';

@Component({
  selector: 'docGen',
  templateUrl: './docGen.component.html',
  styleUrls: ['./docGen.component.css']
})
export class DocGenComponent implements OnInit {
  datos:any[];
  materias:Documento[];
  count:number;

  constructor() { }

  ngOnInit(): void {
  }

}
