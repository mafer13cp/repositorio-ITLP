import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Rating } from '../interfaces/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getRatingsCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ratings/count`);
  }
  public getRatings():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ratings`);
  }
  public getRatingById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ratings/${id}`);
  }
//#endregion

//#region POST
  public postRating(rating: Rating):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(rating);
    return this.http.post(`${this.baseUrl}/ratings`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putRating(rating: Rating):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(rating);
    return this.http.put(`${this.baseUrl}/ratings/${rating.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delRating(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/ratings/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterRatingByUsuario(usuario: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_usuario', usuario);
  return this.http.get<any>(`${this.baseUrl}/ratings`,{params: paramsHttp});
}
public filterRatingByDoc(doc: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_documento', doc);
  return this.http.get<any>(`${this.baseUrl}/ratings`,{params: paramsHttp});
}
public getDocRating(doc: string):number {
  const ratingList = this.filterRatingByDoc(doc);
  let sum = 0;
  let i = 0;
  ratingList.forEach(element => {
    sum += element;
    i++;
  });
  return Math.floor(sum%i);
}
public getRatingNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/ratings`,{params: paramsHttp});
}
//#endregion

//#region Filter Include
public getDocumento():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/ratings/?filter={"include":["rating_documento"]}`);
}

public getUsuario():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/ratings/?filter={"include":["rating_usuario"]}`);
}
//#endregion
}
