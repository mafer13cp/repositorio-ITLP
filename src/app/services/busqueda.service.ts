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

  async getDocYUsr():Promise<Documento[]>{
    await this.docServ.getDocNum(20).subscribe((data)=>{
      this.docs = data;
    });
    return this.docs;
  }

  //#endregion
}
