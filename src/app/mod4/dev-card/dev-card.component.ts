import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.css']
})
export class DevCardComponent implements OnInit {

  @Input() dev:String;

  constructor() { 
    this.dev = "";
  }

  ngOnInit(): void {
  }

}
