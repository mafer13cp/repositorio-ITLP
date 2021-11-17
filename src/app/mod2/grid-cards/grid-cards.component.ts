import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gridCards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css','../../app.component.css']
})
export class GridCardsComponent implements OnInit {


  @Input() title: string = "title";
  @Input() num: number = 1;
  count: number[] =[];

  constructor() { }

  ngOnInit(): void {
    this.count = Array(this.num);
  }

}

