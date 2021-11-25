import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'docInfo',
  templateUrl: './docInfo.component.html',
  styleUrls: ['./docInfo.component.css','../../app.component.css']
})
export class DocInfoComponent implements OnInit {
  @Input() desc:string = "";
  @Input() title:string = "";
  @Input() nameDoc:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
