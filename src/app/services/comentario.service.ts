import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Comentario } from '../interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getComsCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/comentarios/count`);
  }
  public getComs():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/comentarios`);
  }
  public getComById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/comentarios/${id}`);
  }
//#endregion

//#region POST
  public postCom(com: Comentario):Observable<any> {
    const headers = {'content-type': 'application/json'};
    let x = {texto:com.texto, fk_documento:com.fk_documento, fk_usuario:com.fk_usuario,fecha:com.fecha};
    const body = JSON.stringify(x);
    return this.http.post(`${this.baseUrl}/comentarios`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putCom(com: Comentario):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(com);
    return this.http.put(`${this.baseUrl}/comentarios/${com.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delCom(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/comentarios/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterComByDoc(doc: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_documento', doc);
  return this.http.get<any>(`${this.baseUrl}/comentarios`,{params: paramsHttp});
}
public filterComByUsuario(usuario: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_usuario', usuario);
  return this.http.get<any>(`${this.baseUrl}/comentarios`,{params: paramsHttp});
}
public getComNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/comentarios`,{params: paramsHttp});
}
//#endregion

//#region Filter Include
public getDocumento():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/comentarios/?filter={"include":["comentario_documento"]}`);
}

public getUsuario():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/comentarios/?filter={"include":["comentario_usuario"]}`);
}
//#endregion
}
