import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'searchByBar',
  templateUrl: './searchByBar.component.html',
  styleUrls: ['./searchByBar.component.css','../../app.component.css']
})
export class SearchByBarComponent implements OnInit {

  @Input() text: string = "text";

  constructor() { 
  }

  ngOnInit(): void {
  }
}
