import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'sideNav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css','../../app.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() public AccEvent= new EventEmitter();
  tags:string[] = [];
  materias:string[] = [];
  tagOMat:string;

  constructor(private tag:TagService, private materia:MateriaService,private router:Router) { }

  ngOnInit(): void {
    this.tag.getTags().subscribe(data=>{
      let cont = 0;
      for(let i = data.length-1; i >= 0; i--){
        this.tags.push(data[i].nombre);
        cont++;
        if(cont > 7)
          break;
      }
    });
    this.materia.getMats().subscribe(data=>{
      let cont = 0;
      for(let i = data.length-1; i >= 0; i--){
        this.materias.push(data[i].nombre);
        cont++;
        if(cont > 7)
          break;
      }
    });
  }
  
  ngThrowParam(text:string){
    this.AccEvent.emit([text,this.tagOMat]);
  }

  ngEsMateria(){
    this.tagOMat = "Materia";
  }

  ngEsTag(){
    this.tagOMat = "Tag";
  }

  ngRedirectAboutUs(){
    this.router.navigate(['/aboutUs']);
  }
}
