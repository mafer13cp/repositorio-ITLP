import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

//Servicios
import { DocumentoService } from './documento.service';
//Entidades
import { Documento } from '../interfaces/documento';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private parametro:string="";
  //Declaraciones pantallaInicio
  private docs:Documento[] = [];

  constructor(private docServ:DocumentoService) { }

  public getParam():string{
    return this.parametro;
  }

  public setParam(param:string):void{
    this.parametro = param;
  }

  //#region PantallaInicio


  //#endregion
}
