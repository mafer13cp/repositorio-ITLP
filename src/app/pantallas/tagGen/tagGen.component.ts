import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagTagDocDocumento } from 'src/app/interfaces/tagTagDocDocumento';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'tagGen',
  templateUrl: './tagGen.component.html',
  styleUrls: ['./tagGen.component.css','../../app.component.css']
})
export class TagGenComponent implements OnInit {
  datos:any[]=[];
  tags:TagTagDocDocumento[];
  idLog:string;

  constructor(private tag:TagService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.ngConsultarTags();
  }

  ngClickSearchBar(text:string){
    if(text != null && text != "")
      this.router.navigate([`/resBusqueda/${this.idLog}/${"SFText"}/${text}`]);
    else
      this.router.navigate([`/resBusqueda/${this.idLog}/${"SFText"}/${"_"}`]);
  }

  ngConsultarTags(){
    this.tag.getDocumentos().subscribe((data)=>{ //todas las materias y cada una con todos sus documentos en documentos_materia
      this.tags = data;
      let c;
      this.tags.forEach(t => {
        if(t.documentos_tag == null)
          c = 0;
        else
          c = t.documentos_tag.length;
        this.datos.push({id:t.id, name:t.nombre, count:c + " documento(s)"});
      });
    });
  }
}
