import { Component, OnInit } from '@angular/core';
import { DocumentoAutorUsuario } from 'src/app/interfaces/documentoAutorUsuario';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'docGen',
  templateUrl: './docGen.component.html',
  styleUrls: ['./docGen.component.css']
})
export class DocGenComponent implements OnInit {
  datos:any[]=[];
  documentos:DocumentoAutorUsuario[];
  count:number;

  constructor(private documento:DocumentoService) { }

  ngOnInit(): void {
    this.ngConsultarDocs();
  }

  ngClickSearchBar(texto:string){
    //Aqui debe ir a resBusqueda y buscar con el filtro TAG usando el texto.
  }

  ngConsultarDocs(){
    this.documento.getUsuarios().subscribe((data)=>{ //todas las materias y cada una con todos sus documentos en documentos_materia
      this.documentos = data;
      this.documentos.forEach(t => {
        this.datos.push({id:t.id, name:t.nombre, count:t.usuarios_documento[0].nombre}); //Da error porque AGENTES INTELIGENTES no tiene un autor asociado.
      });
    });
  }
}
