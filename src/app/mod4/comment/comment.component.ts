import { Component, OnInit, Input, Output, ViewChild, EventEmitter} from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css','../../app.component.css']
})
export class CommentComponent implements OnInit {
  @Output() public UserEvent= new EventEmitter();

  @Input() userName: string = "Nombre usuario";
  @Input() date: string = "01/01/21";
  @Input() text: string = "Lorem";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnClick(control: any){
    //Mandar el nombre de usuario y el id para mostrar perfil
    const texto = control.srcElement.innerHTML;
    this.UserEvent.emit(texto);
    console.log("desde comentario: " + texto);
  }
}
