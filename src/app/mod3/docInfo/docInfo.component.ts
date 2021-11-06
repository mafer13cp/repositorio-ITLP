import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'docInfo',
  templateUrl: './docInfo.component.html',
  styleUrls: ['./docInfo.component.css']
})
export class DocInfoComponent implements OnInit {
  @Input() desc:string = "";
  @Input() tit:string = "";
  @Input() nomDoc:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
