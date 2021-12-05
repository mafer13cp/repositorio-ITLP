import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { UsuarioRol } from 'src/app/interfaces/usuarioRol';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'perfilUsr',
  templateUrl: './perfilUsr.component.html',
  styleUrls: ['./perfilUsr.component.css']
})
export class PerfilUsrComponent implements OnInit {
  rol:Rol = {id:1,nombre:"Administrador"}; //Temporal en lo que se recibe un UsuarioRol
  @Input() usuario:UsuarioRol;
  desc:string;
  comentarios:number;
  apariciones:number;
  documentos:UsuarioAutorDocumento;
  idLog:string;

  constructor(private usr:UsuarioService, private comunicacion:ComunicacionService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let idUsr:string = this.route.snapshot.paramMap.get('idUsr');
    if(idUsr == null)
      idUsr = this.route.snapshot.paramMap.get('idLog');
    this.ngConsultarUsuarioRol(idUsr);
    this.ngConsultarUsuarioComentario(idUsr);
    this.ngConsultarUsuarioAutor(idUsr);
    this.ngConsultarUsuarioDocumento(idUsr);
  }

  ngConsultarUsuarioRol(id:string){
    this.usr.getRolById(id).subscribe((data)=>{
      this.usuario = data;
      this.desc = data[0].descripcion;
      this.comunicacion.setUsuarioPerfil(this.usuario);
    });
  }

  ngConsultarUsuarioComentario(id:string){
    this.usr.getComentsById(id).subscribe((data)=>{
      if(data[0].comentarios_usuario == null)
        this.comentarios = 0;
      else
        this.comentarios = data[0].comentarios_usuario.length
    });
  }

  ngConsultarUsuarioAutor(id:string){
    this.usr.getDocsById(id).subscribe((data)=>{
      if(data[0].documentos_usuario == null)
        this.apariciones = 0;
      else
        this.apariciones = data[0].documentos_usuario.length;
    });
  }

  ngConsultarUsuarioDocumento(id:string){
    this.comunicacion.setDocsEmpty();
    this.usr.getDocsById(id).subscribe((data)=>{
      data[0].documentos_usuario.forEach(doc => {
        this.comunicacion.addDocumentoUsrPerfil(doc,data[0].nombre);
      });
    });
  }
}
