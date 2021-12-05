import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'docSideInfoAut',
  templateUrl: './doc-side-info-aut.component.html',
  styleUrls: ['./doc-side-info-aut.component.css','../../app.component.css']
})
export class DocSideInfoAutComponent implements OnInit {
  @Output() public AccEvent= new EventEmitter();
  tagOMat:string;
  autores:string[] = [];
  tags:string[] = [];
  materia:string;

  constructor(private comunicacion:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacion.getAutoresView$().subscribe(autores=>{
      this.autores = autores;
    });
    this.comunicacion.getTagsView$().subscribe(tags=>{
      this.tags = tags;
    });
    this.comunicacion.getMateriaView$().subscribe(materia=>{
      this.materia = materia;
    });
  }

  ngThrowParam(text:string){
    this.AccEvent.emit([text,this.tagOMat]);
    console.log("desde doc info aut: " + text);
  }
  
  ngEsMateria(){
    this.tagOMat = "Materia";
  }

  ngEsTag(){
    this.tagOMat = "Tag";
  }

  ngEsAutor(){
    this.tagOMat = "Autor";
  }
}
