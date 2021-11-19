import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordionTagAut',
  templateUrl: './accordion-tag-aut.component.html',
  styleUrls: ['./accordion-tag-aut.component.css','../../app.component.css']
})
export class AccordionTagAutComponent implements OnInit {


  @Input() title: string = "title";
  @Input() listTags: string[]  = ['tag'];

  constructor() { }

  ngOnInit(): void {
  }


}
