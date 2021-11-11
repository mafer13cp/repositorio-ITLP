import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'docMini',
  templateUrl: './doc-mini.component.html',
  styleUrls: ['./doc-mini.component.css','../../app.component.css']
})
export class DocMiniComponent implements OnInit {

  @Input() docTitle: string = "title";
  @Input() autorName: string = "name";

  constructor() { 
  }

  ngOnInit(): void { 
  }

}
