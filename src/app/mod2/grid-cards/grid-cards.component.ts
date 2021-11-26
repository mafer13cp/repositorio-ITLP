import { Component, OnInit, Input } from '@angular/core';
import { Documento } from 'src/app/interfaces/documento';

@Component({
  selector: 'gridCards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css','../../app.component.css']
})
export class GridCardsComponent implements OnInit {


  @Input() title: string = "title";
  @Input() documents: Documento[]; 
  docs: Documento[];

  constructor() { }

  ngOnInit(): void {
  }

}

