import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subirDoc',
  templateUrl: './subirDoc.component.html',
  styleUrls: ['./subirDoc.component.css']
})
export class SubirDocComponent implements OnInit {
  coleccion = {autores: null,tags:null,titulo:null,materia:null,archivo:null,descripcion:null};

  constructor() { }

  ngOnInit(): void {
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
      alert("ERROR: Debe ingresar un título");
    else if(this.coleccion.materia == null || this.coleccion.materia == "")
      alert("ERROR: Debe ingresar una materia");
    else if(this.coleccion.autores == null || this.coleccion.autores == [])
      alert("ERROR: Debe ingresar al menos un autor");
    else if(this.coleccion.archivo == null || this.coleccion.archivo == "")
      alert("ERROR: Debe seleccionar un archivo");
    else if(this.coleccion.descripcion == null || this.coleccion.descripcion == "")
      alert("ERROR: Debe ingresar una descripción");
    else if(this.coleccion.tags == null || this.coleccion.tags == [])
      alert("ERROR: Debe ingresar al menos un tag");
    else{
      console.log(this.coleccion);
      //Aqui se debe hacer el procedimiento de subir el documento.
    }
  }
}
