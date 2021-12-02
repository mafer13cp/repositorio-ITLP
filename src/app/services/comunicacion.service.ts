import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DocShow } from '../interfaces/docShow';
import { Documento } from '../interfaces/documento';
import { DocumentoAutorUsuario } from '../interfaces/documentoAutorUsuario';
import { Usuario } from '../interfaces/usuario';
import { UsuarioRol } from '../interfaces/usuarioRol';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private documentoGrid:DocShow[];
  private documentoGrid$:Subject<DocShow[]>;
  private docShowTemp:DocShow;
  private usuarioPerfil:UsuarioRol;
  private usuarioPerfil$:Subject<UsuarioRol>;

  constructor() { 
    this.documentoGrid = [];
    this.documentoGrid$ = new Subject();
    this.usuarioPerfil$ = new Subject();
  }

  addDocumentoUsr(documento:DocumentoAutorUsuario){
    this.docShowTemp = {
      idDoc:documento.id,
      nombreDoc:documento.nombre,
      usuarios:documento.usuarios_documento,
      usuarioPrincipal:documento.usuarios_documento[0], //ESTE ERROR DA PORQUE HAY DOCUMENTOS EN LA BD SIN USUARIOS ASOCIADOS
      fechaDoc:documento.fecha,
      materia:null,
      tags:null,
      rating:null
    };
    this.documentoGrid.push(this.docShowTemp);
    this.documentoGrid$.next(this.documentoGrid);
  }

  addDocumentoUsr2(documento:Documento, usuarios:Usuario[]){
    this.docShowTemp = {
      idDoc:documento.id,
      nombreDoc:documento.nombre,
      usuarios:usuarios,
      usuarioPrincipal:usuarios[0], //ESTE ERROR DA PORQUE HAY DOCUMENTOS EN LA BD SIN USUARIOS ASOCIADOS
      fechaDoc:documento.fecha,
      materia:null,
      tags:null,
      rating:null
    };
    this.documentoGrid.push(this.docShowTemp);
    this.documentoGrid$.next(this.documentoGrid);
  }

  addDocumentoUsrPerfil(documento:Documento,usuario:string){
    this.docShowTemp = {
      idDoc:documento.id,
      nombreDoc:documento.nombre,
      usuarios:null,
      usuarioPrincipal:{id:"",nombre:usuario,correo:"",imagen:1,fk_rol:1,fk_carrera:"",contrasena:""}, //ESTE ERROR DA PORQUE HAY DOCUMENTOS EN LA BD SIN USUARIOS ASOCIADOS
      fechaDoc:documento.fecha,
      materia:null,
      tags:null,
      rating:null
    };
    this.documentoGrid.push(this.docShowTemp);
    this.documentoGrid$.next(this.documentoGrid);
  }

  getDocumentoUsr$():Observable<DocShow[]>{
    return this.documentoGrid$.asObservable();
  }

  setDocsEmpty(){
    this.documentoGrid = [];
  }

  setUsuarioPerfil(usuario:UsuarioRol){
    this.usuarioPerfil=usuario;
    this.usuarioPerfil$.next(this.usuarioPerfil);
  }

  getUsuarioPerfil$():Observable<UsuarioRol>{
    return this.usuarioPerfil$.asObservable();
  }
}
