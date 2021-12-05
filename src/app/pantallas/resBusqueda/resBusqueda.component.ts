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
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            let docs = this.comunicacion.getDocumentoUsrNormal();
            data.forEach(tag => {
              if(tag.documentos_tag != null){
                tag.documentos_tag.forEach(docUsr => {
                  if(docs.length == 0)
                    this.comunicacion.addDocumentoUsr(docUsr);
                  else{
                    docs.forEach(doc => {
                      if(doc.idDoc != docUsr.id)
                        this.comunicacion.addDocumentoUsr(docUsr);
                    });
                  }
                });
              }
              else 
                this.openSnackBar("Este tag no tiene documentos asociados","OK");
            });
          }
        });
    }
    else if(filtro == "SFText"){
      this.comunicacion.setDocsEmpty();
        this.tag.getDocsUsrByTagNombre(texto).subscribe((data)=>{
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            let docs = this.comunicacion.getDocumentoUsrNormal();
            let coincidencias = false;
            data.forEach(tag => {
              if(tag.documentos_tag != null){
                tag.documentos_tag.forEach(docUsr => {
                  coincidencias = true;
                  if(docs.length == 0)
                    this.comunicacion.addDocumentoUsr(docUsr);
                  else{
                    docs.forEach(doc => {
                      if(doc.idDoc != docUsr.id)
                        this.comunicacion.addDocumentoUsr(docUsr);
                    });
                  }
                });
              }
            });
            if(!coincidencias)
              this.openSnackBar("No hay documentos asociados al tag especificado","OK");
          }
        });
    }
    else if(filtro == "Materia"){
      this.comunicacion.setDocsEmpty();
        this.materia.getDocsUsrByMatNombre(texto).subscribe((data)=>{
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
    if(filtro == "Documentos"){
      this.comunicacion.setDocsEmpty();
        this.documento.getUsuariosNomDoc("").subscribe((data)=>{
          if(data.length == 0)
            this.openSnackBar("ERROR: No hay ningún documento en el sistema","OK");
          else{
            data.forEach(docUsr => {
              this.comunicacion.addDocumentoUsr(docUsr);
            });
          }
        });
    }
    else if(filtro == "Autores"){
      this.comunicacion.setDocsEmpty();
        this.usuario.getDocsUsrByUsrNombre("").subscribe((data)=>{
          if(data.length == 0)
            this.openSnackBar("ERROR: No hay ningún documento en el sistema","OK");
          else{
            data.forEach(usr => {
              if(usr.documentos_usuario != null){
                usr.documentos_usuario.forEach(doc => {
                  let docs = this.comunicacion.getDocumentoUsrNormal();
                    if(docs.length == 0)
                      this.comunicacion.addDocumentoUsr2(doc,data,{id:usr.id,nombre:usr.nombre,correo:usr.correo,contrasena:"",descripcion:usr.descripcion,imagen:usr.imagen,fk_rol:usr.fkrol,fk_carrera:usr.fk_carrera});
                    else{
                      docs.forEach(d => {
                        if(d.idDoc != doc.id){
                          this.comunicacion.addDocumentoUsr2(doc,data,{id:usr.id,nombre:usr.nombre,correo:usr.correo,
                            contrasena:"",descripcion:usr.descripcion,imagen:usr.imagen,fk_rol:usr.fkrol,
                            fk_carrera:usr.fk_carrera});
                        }
                      });
                    }
                });
              }
            });
          }
        });
    }
    else if(filtro == "Materias"){
      this.comunicacion.setDocsEmpty();
      this.materia.getDocsUsrByMatNombre("").subscribe((data)=>{
        if(data.length == 0)
          this.openSnackBar("ERROR: No hay ningún documento asociado a materias","OK");
        else{
          data.forEach(materia => {
            if(materia.documentos_materia != null){
              materia.documentos_materia.forEach(docUsr => {
                this.comunicacion.addDocumentoUsr(docUsr);
              });
            }
          });
        }
      });
    }
    else if(filtro == "Etiquetas"){
      this.comunicacion.setDocsEmpty();
        this.tag.getDocsUsrByTagNombre("").subscribe((data)=>{
          if(data.length == 0)
            this.openSnackBar("ERROR: No hay ningún documento asociado a un tag","OK");
          else{
            let docs = this.comunicacion.getDocumentoUsrNormal();
            data.forEach(tag => {
              if(tag.documentos_tag != null){
                tag.documentos_tag.forEach(docUsr => {
                  if(docs.length == 0)
                    this.comunicacion.addDocumentoUsr(docUsr);
                  else{
                    docs.forEach(doc => {
                      if(doc.idDoc != docUsr.id)
                        this.comunicacion.addDocumentoUsr(docUsr);
                    });
                  }
                });
              }
            });
          }
        });
    }
  }

  async ngRecibirTexto(texto:string){
    this.texto = texto;
    if(this.filtro == null){
      this.openSnackBar("ERROR: Debe elegir un filtro","OK");
    }
    else if(texto == null || texto == ""){
      this.openSnackBar("ERROR: Se debe ingresar una algún texto para filtrar","OK");
    }
    else{
      if(this.filtro == "Documentos"){
        this.comunicacion.setDocsEmpty();
        this.documento.getUsuariosNomDoc(texto).subscribe((data)=>{
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
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            data.forEach(usr => {
              if(usr.documentos_usuario!=null){
                usr.documentos_usuario.forEach(doc => {
                  let docs = this.comunicacion.getDocumentoUsrNormal();
                    if(docs.length == 0)
                      this.comunicacion.addDocumentoUsr2(doc,data,{id:usr.id,nombre:usr.nombre,correo:usr.correo,contrasena:"",descripcion:usr.descripcion,imagen:usr.imagen,fk_rol:usr.fkrol,fk_carrera:usr.fk_carrera});
                    else{
                      docs.forEach(d => {
                        if(d.idDoc != doc.id){
                          this.comunicacion.addDocumentoUsr2(doc,data,{id:usr.id,nombre:usr.nombre,correo:usr.correo,
                            contrasena:"",descripcion:usr.descripcion,imagen:usr.imagen,fk_rol:usr.fkrol,
                            fk_carrera:usr.fk_carrera});
                          }
                      });
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
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            data.forEach(materia => {
              materia.documentos_materia.forEach(docUsr => {
                this.comunicacion.addDocumentoUsr(docUsr);
              });
            });
          }
        });
      }
      else if(this.filtro == "Etiquetas"){
        this.comunicacion.setDocsEmpty();
        this.tag.getDocsUsrByTagNombre(texto).subscribe((data)=>{
          if(data.length == 0)
            this.openSnackBar("ERROR: No se encontró coincidencia","OK");
          else{
            let docs = this.comunicacion.getDocumentoUsrNormal();
            data.forEach(tag => {
              if(tag.documentos_tag != null){
                tag.documentos_tag.forEach(docUsr => {
                  if(docs.length == 0)
                    this.comunicacion.addDocumentoUsr(docUsr);
                  else{
                    docs.forEach(doc => {
                      if(doc.idDoc != docUsr.id)
                        this.comunicacion.addDocumentoUsr(docUsr);
                    });
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
