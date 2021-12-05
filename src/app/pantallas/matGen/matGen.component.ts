import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private materia:MateriaService,private router:Router) { }

  ngOnInit(): void {
    this.ngConsultarMaterias();
  }

  ngClickSearchBar(text:string){
    if(text != null && text != "")
      this.router.navigate([`/resBusqueda/${"SFText"}/${text}`]);
    else
      this.router.navigate([`/resBusqueda/${"SFText"}/${"_"}`]);
  }

  ngConsultarMaterias(){
    this.materia.getDocumentos().subscribe((data)=>{ //todas las materias y cada una con todos sus documentos en documentos_materia
      this.materias = data;
      let c;
      this.materias.forEach(mat => {
        if(mat.documentos_materia == null)
          c = 0;
        else
          c = mat.documentos_materia.length;
        this.datos.push({id:mat.id, name:mat.nombre, count:c + " documento(s)"});
      });
    });
  }
}
