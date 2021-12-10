import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DocShow } from 'src/app/interfaces/docShow';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'gridCards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css','../../app.component.css']
})
export class GridCardsComponent implements OnInit{


  @Input() title: string = "title";
  @Input() documents: DocShow[] = []; 

  constructor(private comunicacion:ComunicacionService,private router:Router) { }

  ngOnInit(): void {
    let re = new RegExp(`/perfilUSr.*`,'i');
    if(this.router.url.match(re)){
      this.comunicacion.getDocumentoUsrPerfil$().subscribe(documentos =>{
        this.documents = documentos;
      });
    }
    else{
      this.comunicacion.getDocumentoUsr$().subscribe(documentos =>{
        this.documents = documentos;
      });
    }
  }

}

