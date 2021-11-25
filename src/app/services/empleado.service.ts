import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getEmpleadosCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/empleados/count`);
  }
  public getEmpleados():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/empleados`);
  }
  public getEmpleadoById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/empleados/${id}`);
  }
//#endregion

//#region POST
  public postEmpleado(empleado: Empleado):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(empleado);
    return this.http.post(`${this.baseUrl}/empleados`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putEmpleado(empleado: Empleado):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(empleado);
    return this.http.put(`${this.baseUrl}/empleados/${empleado.fk_usuario}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delEmpleado(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/empleados/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterEmpleadoByGrado(grado: string):Observable<any> {
  const paramsHttp = new HttpParams().set('grado', grado);
  return this.http.get<any>(`${this.baseUrl}/empleados`,{params: paramsHttp});
}
public filterEmpleadoByArea(area: string):Observable<any> {
  const paramsHttp = new HttpParams().set('area', area);
  return this.http.get<any>(`${this.baseUrl}/empleados`,{params: paramsHttp});
}
public getEmpleado(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/empleados`,{params: paramsHttp});
}
//#endregion
}
