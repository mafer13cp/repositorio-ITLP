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
  private parametro:any;
  private click:boolean = false;
  //Declaraciones pantallaInicio
  private docs:Documento[] = [];

  constructor(private docServ:DocumentoService) { }

  public getParam():Observable<any>{
    return <any>this.parametro;
  }

  public setParam(param:any):void{
    this.parametro = param;
  }

  public getClick():Observable<any>{
    return <any>this.click;
  }

  public setClick(click:any):void{
    this.click = click;
  }

  //#region PantallaInicio


  //#endregion
}
