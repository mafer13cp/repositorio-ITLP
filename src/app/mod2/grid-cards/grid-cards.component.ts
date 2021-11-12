import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gridCards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css','../../app.component.css']
})
export class GridCardsComponent implements OnInit {

  //private docs: object[] = [];

  @Input() title: string = "title";

  constructor() { }

  ngOnInit(): void {
  }

}

