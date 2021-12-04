import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'subirDoc',
  templateUrl: './subirDoc.component.html',
  styleUrls: ['./subirDoc.component.css']
})
export class SubirDocComponent implements OnInit {
  coleccion = {autores: null,tags:null,titulo:null,materia:null,archivo:null,descripcion:null};
  boolAutor: boolean = false;
  boolTag: boolean = false;
  boolMat:boolean = true;
  tags:string[] = [];
  materias:string[] = [];

  constructor(readonly snackBar: MatSnackBar,private materia:MateriaService, private comunicacion:ComunicacionService,
    private tag:TagService) { }

  ngOnInit(): void {
    this.materia.getMats().subscribe((data)=>{
      this.comunicacion.setMaterias(data);
      data.forEach(m => {
        this.materias.push(m.nombre);
      });
    });
    this.tag.getTags().subscribe((data)=>{
      this.comunicacion.setTags(data);
      data.forEach(t => {
        this.tags.push(t.nombre);
      });
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngRecibirAutores(autores:string[]){
    this.coleccion.autores = autores;
  }

  ngRecibirTags(tags:string[]){
    this.coleccion.tags = tags;
  }

  ngRecibirTitulo(titulo:string){
    this.coleccion.titulo = titulo;
  }

  ngRecibirMateria(materia:string){
    this.coleccion.materia = materia;
  }

  ngRecibirDescripcion(descripcion:string){
    this.coleccion.descripcion = descripcion;
  }

  ngRecibirArchivo(file:any){
    this.coleccion.archivo = file;
  }

  ngSubirDocumento(){
    this.boolAutor = false;
    this.boolTag = false;
    this.boolMat = true;
    if(this.coleccion.titulo == null || this.coleccion.titulo == "") //Validación de vacio o nulo
      this.openSnackBar("ERROR: Debe ingresar un título","OK");
    else if(this.coleccion.materia == null || this.coleccion.materia == "")
      this.openSnackBar("ERROR: Debe ingresar una materia","OK");
    else if(this.coleccion.autores == null || this.coleccion.autores == [])
      this.openSnackBar("ERROR: Debe ingresar al menos un autor","OK");
    else if(this.coleccion.archivo == null || this.coleccion.archivo == "")
      this.openSnackBar("ERROR: Debe seleccionar un archivo","OK");
    else if(this.coleccion.descripcion == null || this.coleccion.descripcion == "")
      this.openSnackBar("ERROR: Debe ingresar una descripción","OK");
    else if(this.coleccion.tags == null || this.coleccion.tags == [])
      this.openSnackBar("ERROR: Debe ingresar al menos un tag","OK");
    else  if(this.coleccion.titulo.length > 30) //Validación longitud de datos
    this.openSnackBar("ERROR: El título no puede exceder los 30 caracteres","OK");
    else if(this.coleccion.descripcion.length > 200)
      this.openSnackBar("ERROR: La descripción no puede exceder los 200 caracteres","OK");
    else if(this.coleccion.archivo.type != "application/pdf")
    this.openSnackBar("ERROR: Solo se aceptan archivos PDF","OK");
    else{
      if(this.coleccion.autores !=null && this.coleccion.autores != []){
        for(let i = 0; i < this.coleccion.autores.length; i++){
            if(this.coleccion.autores[i].length > 50){
              this.openSnackBar("ERROR: El nombre de un autor no puede exceder los 50 caracteres","OK");
              this.boolAutor = true;
              break;
            }
        }
      }
      if(this.coleccion.tags !=null && this.coleccion.tags != []){
        for(let i = 0; i < this.coleccion.tags.length; i++){
            if(this.coleccion.tags[i].length > 50){
              this.openSnackBar("ERROR: El nombre de un tag no puede exceder los 50 caracteres","OK");
              this.boolTag = true;
              break;
            }
        }
      }
      this.materias.forEach(mat => {
        if(this.coleccion.materia == mat)
            this.boolMat = false;
      });
      
      if(this.boolMat)
        this.openSnackBar("ERROR: La materia ingresada no existe en el sistema","OK");

      if(!this.boolTag && !this.boolAutor && !this.boolMat){
        console.log(this.coleccion);
        console.log("SE SUBIO EL DOCUMENTO");
        //Aqui se debe hacer el procedimiento de subir el documento con las consultas faltantes.
        
      }
    }
  }
}
