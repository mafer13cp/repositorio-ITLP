import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private parametro:string="";

  constructor() { }

  public getParam():string{
    return this.parametro;
  }

  public setParam(param:string):void{
    this.parametro = param;
  }
}
