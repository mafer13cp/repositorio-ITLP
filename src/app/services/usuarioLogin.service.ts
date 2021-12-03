import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoginService {
  private loggeado:boolean;
  private loggeado$:Subject<boolean>;
  private usuarioLoggeado:Usuario;
  private usuarioLoggeado$:Subject<Usuario>;

  constructor(private usuario:UsuarioService) { 
    this.loggeado = false;
    this.loggeado$ = new Subject();
    this.usuarioLoggeado$ = new Subject();
  }

  setLoggeado(valor:boolean){
    this.loggeado = valor;
    this.loggeado$.next(this.loggeado);
  }

  getLoggeado():Observable<boolean>{
    return this.loggeado$.asObservable();
  }

  setUsuarioLoggeado(usr:Usuario){
    this.usuarioLoggeado = usr;
    this.usuarioLoggeado$.next(this.usuarioLoggeado);
  }

  getUsuarioLoggeado():Observable<Usuario>{
    return this.usuarioLoggeado$.asObservable();
  }

}
