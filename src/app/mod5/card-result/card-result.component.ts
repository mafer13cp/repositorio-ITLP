import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardResult',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css','../../app.component.css']
})
export class CardResultComponent implements OnInit {
  @Input() content: string = "content";
  @Input() name: string = "name";

  constructor() { 
  }

  ngOnInit(): void { 
  }


}
