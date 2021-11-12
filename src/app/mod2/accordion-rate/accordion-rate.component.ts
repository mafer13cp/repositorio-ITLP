import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordionRate',
  templateUrl: './accordion-rate.component.html',
  styleUrls: ['./accordion-rate.component.css','../../app.component.css']
})
export class AccordionRateComponent implements OnInit {

  @Input() title: string = "title";
  @Input() num: number = 1;
  count: number[] =[];

  constructor() { 
  }

  ngOnInit(): void {
    this.count = Array(this.num);
  }


}
