import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DocShow } from '../interfaces/docShow';
import { Documento } from '../interfaces/documento';
import { DocumentoAutorUsuario } from '../interfaces/documentoAutorUsuario';
import { Materia } from '../interfaces/materia';
import { Tag } from '../interfaces/tag';
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
  private materias:string[];
  private materias$:Subject<string[]>;
  private tags:string[];
  private tags$:Subject<string[]>;

  constructor() { 
    this.documentoGrid = [];
    this.documentoGrid$ = new Subject();
    this.usuarioPerfil$ = new Subject();
    this.materias$ = new Subject();
    this.materias = [];
    this.tags$ = new Subject();
    this.tags = [];
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

  addDocumentoUsr2(documento:Documento, usuarios:Usuario[],usuario:Usuario){
    this.docShowTemp = {
      idDoc:documento.id,
      nombreDoc:documento.nombre,
      usuarios:usuarios,
      usuarioPrincipal:usuario, //ESTE ERROR DA PORQUE HAY DOCUMENTOS EN LA BD SIN USUARIOS ASOCIADOS
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
      usuarioPrincipal:{id:"",nombre:usuario,correo:"",imagen:1,fk_rol:1,fk_carrera:"",contrasena:"", descripcion:""}, //ESTE ERROR DA PORQUE HAY DOCUMENTOS EN LA BD SIN USUARIOS ASOCIADOS
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

  getDocumentoUsrNormal():DocShow[]{
    return this.documentoGrid;
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

  setMaterias(materias:Materia[]){
    materias.forEach(mat => {
      this.materias.push(mat.nombre);
    });
    this.materias$.next(this.materias);
  }

  getMaterias():Observable<string[]>{
    return this.materias$.asObservable();
  }

  setTags(tags:Tag[]){
    tags.forEach(tag => {
      this.tags.push(tag.nombre);
    });
    this.materias$.next(this.materias);
  }

  getTags():Observable<string[]>{
    return this.tags$.asObservable();
  }
}
