import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adminSearchResult',
  templateUrl: './admin-search-result.component.html',
  styleUrls: ['./admin-search-result.component.css','../../app.component.css']
})
export class AdminSearchResultComponent implements OnInit {
  @Input() resultados:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
