import { Component, OnInit } from '@angular/core';
import { TagTagDocDocumento } from 'src/app/interfaces/tagTagDocDocumento';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'tagGen',
  templateUrl: './tagGen.component.html',
  styleUrls: ['./tagGen.component.css']
})
export class TagGenComponent implements OnInit {
  datos:any[]=[];
  tags:TagTagDocDocumento[];

  constructor(private tag:TagService) { }

  ngOnInit(): void {
    this.ngConsultarTags();
  }

  ngClickSearchBar(texto:string){
    //Aqui debe ir a resBusqueda y buscar con el filtro TAG usando el texto.
  }

  ngConsultarTags(){
    this.tag.getDocumentos().subscribe((data)=>{ //todas las materias y cada una con todos sus documentos en documentos_materia
      this.tags = data;
      this.tags.forEach(t => {
        this.datos.push({id:t.id, name:t.nombre, count:t.documentos_tag.length});
      });
    });
  }
}
