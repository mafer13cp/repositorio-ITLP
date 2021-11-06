import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'devCard',
  templateUrl: './devCard.component.html',
  styleUrls: ['./devCard.component.css']
})
export class DevCardComponent implements OnInit {

  @Input() dev:String;

  constructor() { 
    this.dev = "";
  }

  ngOnInit(): void {
  }

}
