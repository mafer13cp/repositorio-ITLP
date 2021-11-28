import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Carrera } from '../interfaces/carrera';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getCarrerasCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/carreras/count`);
  }
  public getCarreras():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/carreras`);
  }
  public getCarreraById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/carreras/${id}`);
  }
//#endregion

//#region POST
  public postCarrera(carrera: Carrera):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(carrera);
    return this.http.post(`${this.baseUrl}/carreras`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putCarrera(carrera: Carrera):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(carrera);
    return this.http.put(`${this.baseUrl}/carreras/${carrera.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delCarrera(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/carreras/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterCarreraBySiglas(siglas: string):Observable<any> {
  const paramsHttp = new HttpParams().set('siglas', siglas);
  return this.http.get<any>(`${this.baseUrl}/carreras`,{params: paramsHttp});
}
public filterCarreraByNombre(nombre: string):Observable<any> {
  const paramsHttp = new HttpParams().set('nombre', nombre);
  return this.http.get<any>(`${this.baseUrl}/carreras`,{params: paramsHttp});
}
public getCarreraNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/carreras`,{params: paramsHttp});
}
//#endregion
}
