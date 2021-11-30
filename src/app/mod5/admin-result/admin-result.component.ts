import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adminResult',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.css','../../app.component.css']
})
export class AdminResultComponent implements OnInit {
  @Input() id:any;
  @Input() nombre:any;

  constructor() { }

  ngOnInit(): void {
  }

}
