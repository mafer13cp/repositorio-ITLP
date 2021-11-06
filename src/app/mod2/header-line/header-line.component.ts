import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'headerLine',
  templateUrl: './header-line.component.html',
  styleUrls: ['./header-line.component.css']
})
export class HeaderLineComponent implements OnInit {

  @Input() title: string;

  constructor() { 
    this.title="";
  }

  ngOnInit(): void {
  }

}
