import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'buttonIcon',
  templateUrl: './buttonIcon.component.html',
  styleUrls: ['./buttonIcon.component.css','../../app.component.css']
})
export class ButtonIconComponent implements OnInit {

  @Input() text: string = "btn";
  @Input() icon: string = "upload_file";
  constructor() { }

  ngOnInit(): void {
  }

}
