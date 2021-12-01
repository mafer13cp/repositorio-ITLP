import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardResult',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css','../../app.component.css']
})
export class CardResultComponent implements OnInit {
  @Input() content: any = "content";
  @Input() name: any = "name";
  @Input() id:any = "id"

  constructor() { 
  }

  ngOnInit(): void { 
  }


}
