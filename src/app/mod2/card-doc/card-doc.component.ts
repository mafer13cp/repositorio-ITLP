import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardDoc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.css','../../app.component.css']
})
export class CardDocComponent implements OnInit {

  @Input () docName: string = "title";
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngShowDonPan(){

  }
}
