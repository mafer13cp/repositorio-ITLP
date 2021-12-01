import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'listCard',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input() content: string = "content";
  @Input() name: string = "name";
  @Input() title: string = "title";
  @Input() datos: any[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
