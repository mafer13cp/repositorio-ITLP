import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'specificSearch',
  templateUrl: './specificSearch.component.html',
  styleUrls: ['./specificSearch.component.css','../../app.component.css']
})
export class SpecificSearchComponent implements OnInit {
  
  @Input() text: string = "text";

  constructor() { 
  }

  ngOnInit(): void {
  }

}
