import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'documentFull',
  templateUrl: './documentFull.component.html',
  styleUrls: ['./documentFull.component.css','../../app.component.css']
})
export class DocumentFullComponent implements OnInit {

  @Input() title: string = "title";

  constructor() { }

  ngOnInit(): void {
  }

}
