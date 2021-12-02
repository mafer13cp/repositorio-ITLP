import { Component, OnInit } from '@angular/core';
import { MateriaDocumento } from 'src/app/interfaces/materiaDocumento';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'matGen',
  templateUrl: './matGen.component.html',
  styleUrls: ['./matGen.component.css']
})
export class MatGenComponent implements OnInit {
  datos:any[] = [];
  materias:MateriaDocumento[];

  constructor(private materia:MateriaService) { }

  ngOnInit(): void {
    this.ngConsultarMaterias();
  }

  ngClickSearchBar(texto:string){
    //Aqui debe ir a resBusqueda y buscar con el filtro TAG usando el texto.
  }

  ngConsultarMaterias(){
    this.materia.getDocumentos().subscribe((data)=>{ //todas las materias y cada una con todos sus documentos en documentos_materia
      this.materias = data;
      this.materias.forEach(mat => {
        this.datos.push({id:mat.id, name:mat.nombre, count:mat.documentos_materia.length});
      });
    });
  }
}
