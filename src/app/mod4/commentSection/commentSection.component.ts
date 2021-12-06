import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'commentSection',
  templateUrl: './commentSection.component.html',
  styleUrls: ['./commentSection.component.css','../../app.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Output() public UserEvent= new EventEmitter();
  idDoc:number;
  idLog:string;

  constructor(private comunicacion:ComunicacionService,private comentario:ComentarioService, private route:ActivatedRoute,
    private documento:DocumentoService) { }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.comunicacion.getDocComentarios$().subscribe(doc => {
      this.idDoc=doc.id;
    });
  }

  ngThrowParam(text:string){
    this.UserEvent.emit(text);
  }

  ngRealizarComentario(texto:string){
    let date:string = new Date(Date.now()).toLocaleDateString().toString();
    this.comentario.postCom({id:1,texto:texto,fk_documento:this.idDoc,fk_usuario:this.idLog,fecha:date}).subscribe(com=>{
      
      this.documento.getComentariosUsuarioByDocId(this.idDoc).subscribe(doc=>{
        this.comunicacion.setDocComentarios(doc[0]);
      });
    });
  }
}
