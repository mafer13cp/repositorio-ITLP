import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'editarDoc',
  templateUrl: './editar-doc.component.html',
  styleUrls: ['./editar-doc.component.css']
})
export class EditarDocComponent implements OnInit {
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
    
  }
}
