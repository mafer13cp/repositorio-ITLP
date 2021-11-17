import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

  @Input() color: string = "dark";

  constructor() { }

  ngOnInit(): void {
  }

}
