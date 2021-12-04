import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogService {
  private loggeado:boolean;
  private usuarioLoggeado:Usuario = {id:"0",nombre:"DEFAULT",correo:"DEFAULT@DEFAULT.com",descripcion:"DEFAULT",contrasena:"DEFAULT",imagen:0,fk_rol:1,fk_carrera:"default"};
  


  constructor() { 
    this.loggeado = false;
  }

  setLoggeado(valor:boolean){
    this.loggeado = valor;
  }

  getLoggeado():boolean{
    return this.loggeado;
  }

  setUsuarioLoggeado(usr:Usuario){
    this.usuarioLoggeado = usr;
    console.log("LOGGEADO");
    console.log(usr);
    console.log(this.usuarioLoggeado);
  }

  getUsuarioLoggeado():Usuario{
    return this.usuarioLoggeado
  }
}