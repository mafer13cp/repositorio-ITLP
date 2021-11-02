import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-specific-search',
  templateUrl: './specific-search.component.html',
  styleUrls: ['./specific-search.component.css']
})
export class SpecificSearchComponent implements OnInit {
  
  @Input() texto:String;

  constructor() { 
    this.texto="";
  }

  ngOnInit(): void {
  }

}
