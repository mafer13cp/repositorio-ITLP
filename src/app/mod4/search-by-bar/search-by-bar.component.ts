import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search-by-bar',
  templateUrl: './search-by-bar.component.html',
  styleUrls: ['./search-by-bar.component.css']
})
export class SearchByBarComponent implements OnInit {

  @Input() texto:String;

  constructor() { 
    this.texto="";
  }

  ngOnInit(): void {
  }
}
