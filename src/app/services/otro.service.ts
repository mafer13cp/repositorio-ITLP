import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Otro } from '../interfaces/otros';

@Injectable({
  providedIn: 'root'
})
export class OtrosService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public geOtrosCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/otros/count`);
  }
  public getOtros():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/otros`);
  }
  public getOtroById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/otros/${id}`);
  }
//#endregion

//#region POST
  public postOtro(otro: Otro):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(otro);
    return this.http.post(`${this.baseUrl}/otros`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putOtro(otro: Otro):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(otro);
    return this.http.put(`${this.baseUrl}/otros/${otro.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delOtro(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/otros/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterOtroByNom(nom: string):Observable<any> {
  const paramsHttp = new HttpParams().set('nombre', nom);
  return this.http.get<any>(`${this.baseUrl}/otros`,{params: paramsHttp});
}
public filterDocByArea(doc: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_documento', doc);
  return this.http.get<any>(`${this.baseUrl}/otros`,{params: paramsHttp});
}
public getOtrosNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/otros`,{params: paramsHttp});
}
//#endregion

//#region Filter Include
public getDocumento():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/otros/?filter={"include":["otro_documento"]}`);
}
//#endregion
}
