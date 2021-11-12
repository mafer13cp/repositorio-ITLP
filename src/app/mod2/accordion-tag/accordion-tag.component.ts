import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordionTag',
  templateUrl: './accordion-tag.component.html',
  styleUrls: ['./accordion-tag.component.css','../../app.component.css']
})
export class AccordionTagComponent implements OnInit {

  @Input() title: string = "title";
  @Input() listTags: string[]  = ['tag'];

  constructor() { }

  ngOnInit(): void {
  }

}
