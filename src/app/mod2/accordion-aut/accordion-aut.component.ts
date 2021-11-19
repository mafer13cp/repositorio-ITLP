import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordionAut',
  templateUrl: './accordion-aut.component.html',
  styleUrls: ['./accordion-aut.component.css','../../app.component.css']
})
export class AccordionAutComponent implements OnInit {
  @Input() title: string = "title";
  @Input() listItems: string[] = ['item'];

  constructor() { 
  }

  ngOnInit(): void {
  }
}
