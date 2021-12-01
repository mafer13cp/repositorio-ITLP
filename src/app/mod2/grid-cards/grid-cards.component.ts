import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { DocumentSnapshot } from '@firebase/firestore';
import { DocShow } from 'src/app/interfaces/docShow';
import { Documento } from 'src/app/interfaces/documento';
import { DocumentoAutorUsuario } from 'src/app/interfaces/documentoAutorUsuario';
import { Usuario } from 'src/app/interfaces/usuario';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'gridCards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css','../../app.component.css']
})
export class GridCardsComponent implements OnInit {


  @Input() title: string = "title";
  documents: DocShow[] = []; 

  constructor(private comunicacion:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacion.getDocumentoUsr$().subscribe(documentos =>{
      this.documents = documentos;
    });
  }

}

