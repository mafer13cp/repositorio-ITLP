import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'tagGen',
  templateUrl: './tagGen.component.html',
  styleUrls: ['./tagGen.component.css']
})
export class TagGenComponent implements OnInit {
  datos:any[];
  materias:Tag[];
  count:number;

  constructor() { }

  ngOnInit(): void {
  }

}
