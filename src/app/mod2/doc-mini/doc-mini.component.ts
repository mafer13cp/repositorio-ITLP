import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'docMini',
  templateUrl: './doc-mini.component.html',
  styleUrls: ['./doc-mini.component.css']
})
export class DocMiniComponent implements OnInit {

  @Input() docName: string;
  @Input() autorName: string;

  constructor() { 
    this.docName="";
    this.autorName="";
  }

  ngOnInit(): void {
  }

}
