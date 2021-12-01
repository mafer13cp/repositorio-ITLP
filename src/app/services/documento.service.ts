import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
public filterDocByNombre(nom: string):Observable<any> {
  const x = {
    where: {
      nombre: {
        like: nom+'%'
      }
    }
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/documentos?filter=${y}`);
}
public getDocNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/documentos`,{params: paramsHttp});
}
//#endregion

//#region Filter Include
public getUsuarios():Observable<any>{ //entre [] va la relación de lb4 parece.
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter={"include":["usuarios_documento"]}`);
}

public getComentarios():Observable<any>{ //entre [] va la relación de lb4 parece.
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter={"include":["comentarios_documento"]}`);
}

public getUsuariosComentarios():Observable<any>{
  const x = {
    include: [
      {
        relation: 'comentarios_documento',
        scope: {
          include: [{relation: 'comentario_usuario'}],
        },
      },
    ],
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter=${y}`);
}

public getMateria():Observable<any>{ //entre [] va la relación de lb4 parece.
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter={"include":["documento_materia"]}`);
}

public getCarreraMateria():Observable<any>{
  const x = {
    include: [
      {
        relation: 'documento_materia',
        scope: {
          include: [{relation: 'materia_carrera'}],
        },
      },
    ],
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter=${y}`);
}

public getOtros():Observable<any>{ //entre [] va la relación de lb4 parece.
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter={"include":["otros_documento"]}`);
}

public getRatings():Observable<any>{ //entre [] va la relación de lb4 parece.
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter={"include":["ratings_documento"]}`);
}

public getUsuarioRatings():Observable<any>{
  const x = {
    include: [
      {
        relation: 'ratings_documento',
        scope: {
          include: [{relation: 'rating_usuario'}],
        },
      },
    ],
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter=${y}`);
}

public getTags():Observable<any>{ //entre [] va la relación de lb4 parece.
  return this.http.get<any>(`${this.baseUrl}/documentos/?filter={"include":["tags_documento"]}`);
}
//#enderegion
}
