import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'subirDoc',
  templateUrl: './subirDoc.component.html',
  styleUrls: ['./subirDoc.component.css']
})
export class SubirDocComponent implements OnInit {
  coleccion = {autores: null,tags:null,titulo:null,materia:null,archivo:null,descripcion:null};

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
    if(this.coleccion.titulo == null || this.coleccion.titulo == "")
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
    else{
      console.log(this.coleccion);
      //Aqui se debe hacer el procedimiento de subir el documento.
    }
  }
}
