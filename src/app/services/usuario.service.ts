import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getUsuariosCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuarios/count`);
  }
  public getUsuarios():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuarios`);
  }
  public getUsuarioById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuarios/${id}`);
  }
//#endregion

//#region POST
  public postUsuario(usuario: Usuario):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    return this.http.post(`${this.baseUrl}/usuarios`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putUsuario(usuario: Usuario):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    return this.http.put(`${this.baseUrl}/usuarios/${usuario.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delUsuario(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/usuarios/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterUsuarioByRol(rol: string):Observable<any> {
  const paramsHttp = new HttpParams().set('rol', rol);
  return this.http.get<any>(`${this.baseUrl}/usuarios`,{params: paramsHttp});
}
public filterUsuarioByNombre(nombre: string):Observable<any> {
  const paramsHttp = new HttpParams().set('nombre', nombre);
  return this.http.get<any>(`${this.baseUrl}/usuarios`,{params: paramsHttp});
}
public getUsuario(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/usuarios`,{params: paramsHttp});
}
//#endregion
}
