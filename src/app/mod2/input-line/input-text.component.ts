import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inputLine',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() desc:string="input";

  constructor() { }

  ngOnInit(): void {
  }

}
