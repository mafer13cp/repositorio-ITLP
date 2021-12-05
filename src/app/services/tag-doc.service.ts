import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { TagDoc } from '../interfaces/tagDoc';

@Injectable({
  providedIn: 'root'
})
export class TagDocService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getTagDocsCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tagDocs/count`);
  }
  public getTagDocs():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tagDocs`);
  }
  public getTagDocById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tagDocs/${id}`);
  }
//#endregion

//#region POST
  public postTagDoc(tagID: number, docID:number):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify({fk_documento:docID,fk_tag:tagID});
    return this.http.post(`${this.baseUrl}/tagDocs`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putTagDoc(tagDoc: TagDoc):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(tagDoc);
    return this.http.put(`${this.baseUrl}/tagDocs/${tagDoc.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delTagDoc(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/tagDocs/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterTagDocByDoc(doc: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_documento', doc);
  return this.http.get<any>(`${this.baseUrl}/tagDocs`,{params: paramsHttp});
}
public filterTagDocByTag(tag: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_tag', tag);
  return this.http.get<any>(`${this.baseUrl}/tagDocs`,{params: paramsHttp});
}
public getTagDocNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/tagDocs`,{params: paramsHttp});
}
//#endregion
}
