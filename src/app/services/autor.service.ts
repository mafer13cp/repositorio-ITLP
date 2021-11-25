import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Autor } from '../interfaces/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getAutoresCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/autores/count`);
  }
  public getAutores():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/autores`);
  }
  public getAutorById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/autores/${id}`);
  }
//#endregion

//#region POST
  public postAutor(autor: Autor):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(autor);
    return this.http.post(`${this.baseUrl}/autores`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putAutor(autor: Autor):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(autor);
    return this.http.put(`${this.baseUrl}/autores/${autor.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delAutor(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/autores/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterAutorByDoc(doc: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_documento', doc);
  return this.http.get<any>(`${this.baseUrl}/autores`,{params: paramsHttp});
}
public filterAutorByNombre(nombre: string):Observable<any> {
  const paramsHttp = new HttpParams().set('nombre', nombre);
  return this.http.get<any>(`${this.baseUrl}/autores`,{params: paramsHttp});
}
public filterAutorByUsuario(usuario: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_autor', usuario);
  return this.http.get<any>(`${this.baseUrl}/autores`,{params: paramsHttp});
}
public getAutor(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/autores`,{params: paramsHttp});
}
//#endregion
}
