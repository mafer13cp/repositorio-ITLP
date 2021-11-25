import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css','../../app.component.css']
})
export class CommentComponent implements OnInit {

  @Input() userName: string = "Nombre usuario";
  @Input() date: string = "01/01/21";
  @Input() text: string = "Lorem";

  constructor() { }

  ngOnInit(): void {
  }

}
