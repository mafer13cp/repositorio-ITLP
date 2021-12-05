import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ComentarioService } from 'src/app/services/comentario.service';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'commentSection',
  templateUrl: './commentSection.component.html',
  styleUrls: ['./commentSection.component.css','../../app.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Output() public UserEvent= new EventEmitter();
  idDoc:number;

  constructor(private comuncacion:ComunicacionService,private comentario:ComentarioService) { }

  ngOnInit(): void {
    this.comuncacion.getDocComentarios$().subscribe(doc => {
      this.idDoc=doc.id;
    });
  }

  ngThrowParam(text:string){
    this.UserEvent.emit(text);
    console.log("desde comment section: " + text);
  }

  ngRealizarComentario(texto:string){
    console.log(texto);
    let date:string = new Date(Date.now()).toLocaleDateString().toString();
    console.log(date);
    console.log(this.idDoc);
    //Obtener el id del usuario loggeado y guardarlo en una variable.
    //subir el comentario con las 3 variables y el id del usuario.
    this.comentario.postCom({id:1,texto:texto,fk_documento:this.idDoc,fk_usuario:"17310710",fecha:date}).subscribe(com=>{
      console.log("si");
    });
  }
}
