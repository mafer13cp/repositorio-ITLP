import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggeadoService {
  private loggeado = false;
  constructor() { }

  setUsrId(id:boolean){
    this.loggeado = id;
  }

  getUsrId(){
    return this.loggeado;
  }
}
