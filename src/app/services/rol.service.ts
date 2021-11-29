import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Rol } from '../interfaces/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getRolesCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/roles/count`);
  }
  public getRoles():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/roles`);
  }
  public getRolById(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/roles/${id}`);
  }
//#endregion

//#region POST
  public postRoles(rol: Rol):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(rol);
    return this.http.post(`${this.baseUrl}/roles`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putRoles(rol: Rol):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(rol);
    return this.http.put(`${this.baseUrl}/roles/${rol.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delRol(id: number):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/roles/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterRolByNombre(nombre: string):Observable<any> {
  const paramsHttp = new HttpParams().set('nombre', nombre);
  return this.http.get<any>(`${this.baseUrl}/roles`,{params: paramsHttp});
}
public getRolesNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/roles`,{params: paramsHttp});
}
//#endregion

//#region Filter Include
public getUsuarios():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/roles/?filter={"include":["usuarios_rol"]}`);
}
//#endregion
}
