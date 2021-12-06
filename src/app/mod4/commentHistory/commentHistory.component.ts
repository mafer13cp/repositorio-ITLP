import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ComentarioUsuario } from 'src/app/interfaces/comentarioUsuario';
import { ComentShow } from 'src/app/interfaces/comentShow';
import { DocumentoComentarioUsuario } from 'src/app/interfaces/documentoComentarioUsuario';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'commentHistory',
  templateUrl: './commentHistory.component.html',
  styleUrls: ['./commentHistory.component.css','../../app.component.css']
})
export class CommentHistoryComponent implements OnInit {
  @Output() public UserEvent= new EventEmitter();

  @Input() comments: ComentShow[] = 
  [{
    id: 0,
    texto: 'Comentario aquí',
    fk_documento: 0,
    fk_usuario: 0,
    usuario: 'Nombre de usuario',
    fecha: '30/11/21'
  }];

  docComentarios:DocumentoComentarioUsuario;
  comentariosUsuario:ComentarioUsuario[]=[];
  constructor(private comunicacion:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacion.getDocComentarios$().subscribe(docComen=>{
      this.docComentarios = docComen;
      if(this.docComentarios.comentarios_documento != null)
        this.comentariosUsuario = this.docComentarios.comentarios_documento;
    });
  }
  ngThrowParam(text:string){
    this.UserEvent.emit(text);
  }

}
