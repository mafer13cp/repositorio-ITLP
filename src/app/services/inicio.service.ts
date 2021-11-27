import { Injectable } from '@angular/core';
import { TagService } from './tag.service';
import { DocumentoService } from './documento.service';
import { ViewChild,ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor() { }

  obtenerTextoSearchBar(searchBar:ElementRef):string{
    let param = "";
    return param;
  }
}
