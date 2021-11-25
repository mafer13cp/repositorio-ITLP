import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getAlumsCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/alumnos/count`);
  }
  public getAlums():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/alumnos`);
  }
  public getAlumById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/alumnos/${id}`);
  }
//#endregion

//#region POST
  public postAlum(alum: Alumno):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(alum);
    return this.http.post(`${this.baseUrl}/alumnos`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putAlum(alum: Alumno):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(alum);
    return this.http.put(`${this.baseUrl}/alumnos/${alum.fk_usuario}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delAlum(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/alumnos/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterAlumByCarrera(carrera: string):Observable<any> {
  const paramsHttp = new HttpParams().set('carrera', carrera);
  return this.http.get<any>(`${this.baseUrl}/alumnos`,{params: paramsHttp});
}
public getAlum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/alumnos`,{params: paramsHttp});
}
//#endregion
}
