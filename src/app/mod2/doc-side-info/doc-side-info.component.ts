import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'docSideInfo',
  templateUrl: './doc-side-info.component.html',
  styleUrls: ['./doc-side-info.component.css','../../app.component.css']
})
export class DocSideInfoComponent implements OnInit {
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
    console.log("desde doc info: " + text);
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
