import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tagGrid',
  templateUrl: './tag-grid.component.html',
  styleUrls: ['./tag-grid.component.css']
})
export class TagGridComponent implements OnInit {

  @Input() listTags: string[]  = ['tag'];
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
