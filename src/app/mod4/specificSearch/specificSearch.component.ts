import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'specificSearch',
  templateUrl: './specificSearch.component.html',
  styleUrls: ['./specificSearch.component.css']
})
export class SpecificSearchComponent implements OnInit {
  
  @Input() texto:String;

  constructor() { 
    this.texto="";
  }

  ngOnInit(): void {
  }

}
