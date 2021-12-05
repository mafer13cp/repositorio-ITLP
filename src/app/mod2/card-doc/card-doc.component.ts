import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cardDoc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.css','../../app.component.css']
})
export class CardDocComponent implements OnInit {

  @Input () docName: string = "title";
  @Input() id:number;
  
  constructor(private router:Router) { 
  }

  ngOnInit(): void {
  }

}
