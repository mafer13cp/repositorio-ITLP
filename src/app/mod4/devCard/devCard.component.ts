import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'devCard',
  templateUrl: './devCard.component.html',
  styleUrls: ['./devCard.component.css','../../app.component.css']
})
export class DevCardComponent implements OnInit {

  @Input() name: string = "name";
  @Input() imgUrl: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

  constructor() { 
  }

  ngOnInit(): void {
  }

}
