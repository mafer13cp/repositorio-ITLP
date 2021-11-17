import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'headerLine',
  templateUrl: './header-line.component.html',
  styleUrls: ['./header-line.component.css','../../app.component.css']
})
export class HeaderLineComponent implements OnInit {

  @Input() title: string = "title";
  @Input() color: string = "dark";

  constructor() { 
  }

  ngOnInit(): void {
  }

}
