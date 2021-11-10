import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent implements OnInit{

  @Input() title: string = "title";
  @Input() listItems: string[] = ['item'];

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  panelOpenState = false;

}
