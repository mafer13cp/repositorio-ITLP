import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cardResult',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css','../../app.component.css']
})
export class CardResultComponent implements OnInit {
  @Output() public CREvent = new EventEmitter();
  @Input() content: any = "content";
  @Input() name: any = "name";
  @Input() id:any = "id"

  constructor() { 
  }

  ngOnInit(): void { 
  }

  ngClickCard(){
    this.CREvent.emit([this.name,this.id]);
  }
}
