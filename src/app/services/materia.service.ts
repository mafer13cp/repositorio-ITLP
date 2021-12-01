import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Materia } from '../interfaces/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getMatsCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/materias/count`);
  }
  public getMats():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/materias`);
  }
  public getMatById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/materias/${id}`);
  }
//#endregion

//#region POST
  public postMat(mat: Materia):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(mat);
    return this.http.post(`${this.baseUrl}/materias`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putMat(mat: Materia):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(mat);
    return this.http.put(`${this.baseUrl}/materias/${mat.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delMat(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/materias/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterMatByCarrera(carrera: string):Observable<any> {
  const paramsHttp = new HttpParams().set('fk_carrera', carrera);
  return this.http.get<any>(`${this.baseUrl}/materias`,{params: paramsHttp});
}
public filterMatByNombre(nom: string):Observable<any> {
  const x = {
    where: {
      nombre: {
        like: nom+'%'
      }
    }
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/materias?filter=${y}`);
}
public getMatNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/materias`,{params: paramsHttp});
}
//#endregion

//#region Filter Include
public getCarrera():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/materias/?filter={"include":["materia_carrera"]}`);
}

public getDocumentos():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/materias/?filter={"include":["documentos_materia"]}`);
}

public getDocsByMatNombre(nom: string):Observable<any> {
  const x = {
    include:[{relation:'documentos_materia'}],
    where: {
      nombre: {
        like: nom+'%'
      }
    }
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/materias?filter=${y}`);
}

public getDocsUsrByMatNombre(nom: string):Observable<any> {
  const x = {
    where: {
      nombre: {
        like: nom+'%'
      }
    },
    include: [
      {
        relation: 'documentos_materia',
        scope: {
          include: [{relation: 'usuarios_documento'}]
        }
      }
    ]
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/materias?filter=${y}`);
}
//#endregion
}
