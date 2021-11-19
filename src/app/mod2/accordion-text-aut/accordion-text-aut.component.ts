import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordionTextAut',
  templateUrl: './accordion-text-aut.component.html',
  styleUrls: ['./accordion-text-aut.component.css','../../app.component.css']
})
export class AccordionTextAutComponent implements OnInit {


  @Input() title: string = "title";
  @Input() textAcc: string = "desc"
  constructor() { }

  ngOnInit(): void {
  }

}
