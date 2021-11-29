import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Administrador } from '../interfaces/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getAdminsCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/administradores/count`);
  }
  public getAdmins():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/administradores`);
  }
  public getAdminById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/administradores/${id}`);
  }
//#endregion

//#region POST
  public postAdmin(admin: Administrador):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(admin);
    return this.http.post(`${this.baseUrl}/administradores`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putAdmin(admin: Administrador):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(admin);
    return this.http.put(`${this.baseUrl}/administradores/${admin.fk_usuario}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delAdmin(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/administradores/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterAdminByPuesto(puesto: string):Observable<any> {
  const paramsHttp = new HttpParams().set('puesto', puesto);
  return this.http.get<any>(`${this.baseUrl}/administradores`,{params: paramsHttp});
}
public getAdminNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/administradores`,{params: paramsHttp});
}
//#endregion
}
