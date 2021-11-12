import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'accordionText',
  templateUrl: './accordion-text.component.html',
  styleUrls: ['./accordion-text.component.css','../../app.component.css']
})
export class AccordionTextComponent implements OnInit {

  @Input() title: string = "title";
  @Input() textAcc: string = "desc"
  constructor() { }

  ngOnInit(): void {
  }

}
