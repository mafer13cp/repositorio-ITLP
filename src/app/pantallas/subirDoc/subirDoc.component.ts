import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'subirDoc',
  templateUrl: './subirDoc.component.html',
  styleUrls: ['./subirDoc.component.css']
})
export class SubirDocComponent implements OnInit {
  coleccion = {autores: null,tags:null,titulo:null,materia:null,archivo:null,descripcion:null};
  boolAutor: boolean = false;
  boolTag: boolean = false;

  constructor(readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
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
    else if(this.coleccion.materia.length > 50)
      this.openSnackBar("ERROR: El nombre de la materia no puede exceder los 50 caracteres","OK");
    else if(this.coleccion.descripcion.length > 200)
      this.openSnackBar("ERROR: La descripción no puede exceder los 200 caracteres","OK");
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
      if(!this.boolTag && !this.boolAutor){
        console.log(this.coleccion);
        //Aqui se debe hacer el procedimiento de subir el documento con las consultas faltantes.
      }
    }
  }
}
