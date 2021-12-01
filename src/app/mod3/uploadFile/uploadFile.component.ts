import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'uploadFile',
  templateUrl: './uploadFile.component.html',
  styleUrls: ['./uploadFile.component.css','../../app.component.css']
})
export class UploadFileComponent implements OnInit {
  @Output() public UFEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngSendFile(event:any) {
    this.UFEvent.emit(event.target.files[0]);
  }

}
