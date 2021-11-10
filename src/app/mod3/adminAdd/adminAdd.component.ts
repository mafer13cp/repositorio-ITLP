import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'adminAdd',
  templateUrl: './adminAdd.component.html',
  styleUrls: ['./adminAdd.component.css']
})
export class AdminAddComponent implements OnInit {
  @Input() ops:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
