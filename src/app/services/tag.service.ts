import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Tag } from '../interfaces/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getTagsCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tags/count`);
  }
  public getTags():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tags`);
  }
  public getTagById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tags/${id}`);
  }
//#endregion

//#region POST
  public postTag(tag: Tag):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(tag);
    return this.http.post(`${this.baseUrl}/tags`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putTag(tag: Tag):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(tag);
    return this.http.put(`${this.baseUrl}/tags/${tag.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delTag(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/tags/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterTagByNombre(nombre: string):Observable<any> {
  const paramsHttp = new HttpParams().set('nombre', nombre);
  return this.http.get<any>(`${this.baseUrl}/tags`,{params: paramsHttp});
}
public getTag(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/tags`,{params: paramsHttp});
}
//#endregion
}
