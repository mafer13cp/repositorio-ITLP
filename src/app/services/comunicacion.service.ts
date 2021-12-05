import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DocShow } from '../interfaces/docShow';
import { Documento } from '../interfaces/documento';
import { DocumentoAutorUsuario } from '../interfaces/documentoAutorUsuario';
import { DocumentoComentarioUsuario } from '../interfaces/documentoComentarioUsuario';
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
  private esView:boolean = false; //No está en un viewAut o viewUsr
  private esView$:Subject<boolean>;
  private autoresView:string[];
  private materiaView:string;
  private tagsView:string[];
  private autoresView$:Subject<string[]>;
  private materiaView$:Subject<string>;
  private tagsView$:Subject<string[]>;
  private docComentarios:DocumentoComentarioUsuario;
  private docComentarios$:Subject<DocumentoComentarioUsuario>;

  constructor() { 
    this.documentoGrid = [];
    this.documentoGrid$ = new Subject();
    this.usuarioPerfil$ = new Subject();
    this.materias$ = new Subject();
    this.materias = [];
    this.tags$ = new Subject();
    this.tags = [];
    this.esView$ = new Subject();
    this.autoresView = [];
    this.tagsView = [];
    this.autoresView$ = new Subject();
    this.materiaView$ = new Subject();
    this.tagsView$ = new Subject();
    this.docComentarios$ = new Subject();
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

  setEsView(valor:boolean){
    this.esView = valor;
    this.esView$.next(this.esView);
  }

  getEsView$():Observable<boolean>{
    return this.esView$.asObservable();
  }

  setMateriaView(materia:string){
    this.materiaView = materia;
    this.materiaView$.next(this.materiaView);
  }

  getMateriaView$():Observable<string>{
    return this.materiaView$.asObservable();
  }

  setAutoresView(autor:string){
    this.autoresView.push(autor);
    this.autoresView$.next(this.autoresView);
  }

  getAutoresView$():Observable<string[]>{
    return this.autoresView$.asObservable();
  }

  setTagsView(tag:string){
    this.tagsView.push(tag);
    this.tagsView$.next(this.tagsView);
  }

  getTagsView$():Observable<string[]>{
    return this.tagsView$.asObservable();
  }

  setDocComentarios(docCom:DocumentoComentarioUsuario){
    this.docComentarios = docCom;
    this.docComentarios$.next(this.docComentarios);
  }

  getDocComentarios$():Observable<DocumentoComentarioUsuario>{
    return this.docComentarios$.asObservable();
  }
}
