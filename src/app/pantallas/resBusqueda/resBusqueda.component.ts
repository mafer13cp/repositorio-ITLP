import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interfaces/documento';
import { DocumentoAutorUsuario } from 'src/app/interfaces/documentoAutorUsuario';
import { MateriaDocumento } from 'src/app/interfaces/materiaDocumento';
import { TagTagDocDocumento } from 'src/app/interfaces/tagTagDocDocumento';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'resBusqueda',
  templateUrl: './resBusqueda.component.html',
  styleUrls: ['./resBusqueda.component.css']
})
export class ResBusquedaComponent implements OnInit {
  filtro:string;
  texto:string;
  documentos:Documento[] = []; //Filtro por documentos.
  documentosAutor:UsuarioAutorDocumento; //Filtro por autor.
  documentosMateria:MateriaDocumento;//Filtro por materia
  documentosTag:TagTagDocDocumento; //Filtro por etiqueta
  documentosUsuario:DocumentoAutorUsuario[] = []; //Documentos con su usuario asociado.

  constructor(private usuario:UsuarioService, private documento:DocumentoService, private materia:MateriaService,
    private comunicacion:ComunicacionService, private tag:TagService,readonly snackBar: MatSnackBar,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let filtro:string = this.route.snapshot.paramMap.get('filtro');
    let texto:string = this.route.snapshot.paramMap.get('texto');
    if(texto == "_")
      texto="";
    if(filtro == "Tag"){
      this.comunicacion.setDocsEmpty();
        this.tag.getDocsUsrByTagNombre(texto).subscribe((data)=>{
          this.comunicacion.setDocsEmpty();
          console.log(data);
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            let docExistentes:number[] = [];
            data.forEach(tag => {
              if(tag.documentos_tag != null){
                tag.documentos_tag.forEach(docUsr => {
                  if(docExistentes.length == 0){
                    this.comunicacion.addDocumentoUsr(docUsr);
                    docExistentes.push(docUsr.id)
                  }
                  else{
                    let existe = 0;
                    for(let i = 0; i < docExistentes.length; i++){
                      if(docUsr.id == docExistentes[i]){
                        existe = 1;
                      }
                    }
                    if(existe == 0){
                      this.comunicacion.addDocumentoUsr(docUsr);
                      docExistentes.push(docUsr.id);
                    }
                  }
                });
              }
            });
          }
        });
    }
    else if(filtro == "SFText"){
      this.comunicacion.setDocsEmpty();
        this.documento.getUsuariosNomDoc(texto).subscribe((data)=>{
          this.comunicacion.setDocsEmpty();
          if(data.length == 0)
            this.openSnackBar("ERROR: No hay ningún documento en el sistema","OK");
          else{
            data.forEach(docUsr => {
              this.comunicacion.addDocumentoUsr(docUsr);
            });
          }
        });
    }
    else if(filtro == "Materia"){
      this.comunicacion.setDocsEmpty();
        this.materia.getDocsUsrByMatNombre(texto).subscribe((data)=>{
          this.comunicacion.setDocsEmpty();
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            data.forEach(materia => {
              if(materia.documentos_materia!=null){
                materia.documentos_materia.forEach(docUsr => {
                  this.comunicacion.addDocumentoUsr(docUsr);
                });
              }
              else
                this.openSnackBar("Esta materia no tiene documentos asociados","OK");
            });
          }
        });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngRecibirFiltro(filtro:string){
    this.filtro = filtro;
    this.comunicacion.setDocsEmpty();
    this.documento.getUsuariosNomDoc("").subscribe((data)=>{
      this.comunicacion.setDocsEmpty();
      if(data.length == 0)
        this.openSnackBar("ERROR: No hay ningún documento en el sistema","OK");
      else{
        data.forEach(docUsr => {
        this.comunicacion.addDocumentoUsr(docUsr);
        });
      }
    });
  }

  async ngRecibirTexto(texto:string){
    this.texto = texto;
    if(this.filtro == null){
      this.openSnackBar("ERROR: Debe elegir un filtro","OK");
    }
    else if(texto == null || texto == ""){
      this.comunicacion.setDocsEmpty();
        this.documento.getUsuariosNomDoc(texto).subscribe((data)=>{
          this.comunicacion.setDocsEmpty();
          console.log(data);
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            data.forEach(docUsr => {
              this.comunicacion.addDocumentoUsr(docUsr);
            });
          }
        });
    }
    else{
      if(this.filtro == "Documentos"){
        this.comunicacion.setDocsEmpty();
        this.documento.getUsuariosNomDoc(texto).subscribe((data)=>{
          this.comunicacion.setDocsEmpty();
          console.log(data);
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            data.forEach(docUsr => {
              this.comunicacion.addDocumentoUsr(docUsr);
            });
          }
        });
      }
      else if(this.filtro == "Autores"){
        this.comunicacion.setDocsEmpty();
        this.usuario.getDocsUsrByUsrNombre(texto).subscribe((data)=>{
          this.comunicacion.setDocsEmpty();
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            console.log(data);
            let docExistentes:number[] = [];
            data.forEach(usuario => {
              if(usuario.documentos_usuario != null){
                usuario.documentos_usuario.forEach(doc => {
                  if(docExistentes.length == 0){
                    this.comunicacion.addDocumentoUsr2(doc,{id:usuario.id,nombre:usuario.nombre,correo:usuario.correo,contrasena:usuario.contrasena,imagen:usuario.imagen,descripcion:usuario.descripcion,fk_carrera:usuario.fk_carrera,fk_rol:usuario.fk_rol});
                    
                    docExistentes.push(doc.id)
                    console.log(docExistentes);
                  }
                  else{
                    console.log("else");
                    let existe = 0;
                    for(let i = 0; i < docExistentes.length; i++){
                      console.log(doc.id);
                      if(doc.id == docExistentes[i]){
                        existe = 1;
                        console.log("ID DOCUMENTO");
                        console.log(doc.id);
                        console.log("ID EN EL ARREGLO");
                        console.log(docExistentes[i]);
                      }
                    }
                    console.log(existe);
                    if(existe == 0){
                      this.comunicacion.addDocumentoUsr2(doc,{id:usuario.id,nombre:usuario.nombre,correo:usuario.correo,contrasena:usuario.contrasena,imagen:usuario.imagen,descripcion:usuario.descripcion,fk_carrera:usuario.fk_carrera,fk_rol:usuario.fk_rol});
                      docExistentes.push(doc.id);
                    }
                  }

                });
              }
            });
          }
        });
      }
      else if(this.filtro == "Materias"){
        this.comunicacion.setDocsEmpty();
        this.materia.getDocsUsrByMatNombre(texto).subscribe((data)=>{
          this.comunicacion.setDocsEmpty();
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            let docExistentes:number[] =[];
            data.forEach(materia => {
              materia.documentos_materia.forEach(docUsr => {
                if(docExistentes.length == 0){
                  this.comunicacion.addDocumentoUsr(docUsr);
                  docExistentes.push(docUsr.id);
                }
                else{
                  let existe = 0;
                  for(let i = 0; i < docExistentes.length; i++){
                    if(docExistentes[i]==docUsr.id)
                      existe=1;
                  }
                  if(existe == 0){
                    this.comunicacion.addDocumentoUsr(docUsr);
                    docExistentes.push(docUsr.id);
                  }
                }
              });
            });
          }
        });
      }
      else if(this.filtro == "Etiquetas"){
        this.comunicacion.setDocsEmpty();
        this.tag.getDocsUsrByTagNombre(texto).subscribe((data)=>{
          this.comunicacion.setDocsEmpty();
          console.log(data);
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            let docExistentes:number[] = [];
            data.forEach(tag => {
              if(tag.documentos_tag != null){
                tag.documentos_tag.forEach(docUsr => {
                  if(docExistentes.length == 0){
                    this.comunicacion.addDocumentoUsr(docUsr);
                    docExistentes.push(docUsr.id)
                  }
                  else{
                    let existe = 0;
                    for(let i = 0; i < docExistentes.length; i++){
                      if(docUsr.id == docExistentes[i]){
                        existe = 1;
                      }
                    }
                    if(existe == 0){
                      this.comunicacion.addDocumentoUsr(docUsr);
                      docExistentes.push(docUsr.id);
                    }
                  }
                });
              }
            });
          }
        });
      }
    }
  }
}
