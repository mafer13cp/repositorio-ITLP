import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Documento } from '../interfaces/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getDocsCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/documentos/count`);
  }
  public getDocs():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/documentos`);
  }
  public getDocById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/documentos/${id}`);
  }
//#endregion

//#region POST
  public postDoc(doc: Documento):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(doc);
    return this.http.post(`${this.baseUrl}/documentos`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putDoc(doc: Documento):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(doc);
    return this.http.put(`${this.baseUrl}/documentos/${doc.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delDoc(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/documentos/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterDocByUsuario(usuario: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_usuario', usuario);
  return this.http.get<any>(`${this.baseUrl}/documentos`,{params: paramsHttp});
}
public filterDocByMateria(materia: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_materia', materia);
  return this.http.get<any>(`${this.baseUrl}/documentos`,{params: paramsHttp});
}
public filterDocByNombre(nombre: string):Observable<any> {
  const paramsHttp = new HttpParams().set('nombre', nombre);
  return this.http.get<any>(`${this.baseUrl}/documentos`,{params: paramsHttp});
}
public getDocNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/documentos`,{params: paramsHttp});
}
//#endregion
}
