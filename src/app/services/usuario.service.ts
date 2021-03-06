import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { UsuarioAutorDocumento } from '../interfaces/usuarioAutorDocumento';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = 'https://itlp-repo.herokuapp.com';

  constructor(private http:HttpClient) { }
//#region GET
  public getUsuariosCount():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuarios/count`);
  }
  public getUsuarios():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuarios`);
  }
  public getUsuarioById(idUsr: string):Observable<any> {
    const x = {
      where: {
        id: idUsr
      }
    };
    const y = encodeURIComponent(JSON.stringify(x));
    return this.http.get<any>(`${this.baseUrl}/usuarios/?filter=${y}`);
  }
//#endregion

//#region POST
  public postUsuario(usuario: Usuario):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    return this.http.post(`${this.baseUrl}/usuarios`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region PUT 
  public putUsuario(usuario: Usuario):Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(usuario);
    return this.http.put(`${this.baseUrl}/usuarios/${usuario.id}`,body, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region DELETE 
  public delUsuario(id: string):Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.http.delete(`${this.baseUrl}/usuarios/${id}`, {'headers': headers, observe: 'response'});
  }
//#endregion

//#region GET PARAMS 
public filterUsuarioByRol(rol: number):Observable<any> {
  const paramsHttp = new HttpParams().set('rol', rol);
  return this.http.get<any>(`${this.baseUrl}/usuarios`,{params: paramsHttp});
}
public filterUsuarioByNombre(nom: string):Observable<any> {
  const x = {
    where: {
      nombre: nom
    }
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter=${y}`);
}
public getUsuarioNum(num: number):Observable<any> {
  const paramsHttp = new HttpParams().set('limit', num);
  return this.http.get<any>(`${this.baseUrl}/usuarios`,{params: paramsHttp});
}
//#endregion

//#region Filter Include
public getDocumentos():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter={"include":["documentos_usuario"]}`);
}

public getCarrera():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter={"include":["usuario_carrera"]}`);
}

public getMateriaCarrera():Observable<any>{
  const x = {
    include: [
      {
        relation: 'usuario_carrera',
        scope: {
          include: [{relation: 'materias_carrera'}],
        },
      },
    ],
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter=${y}`);
}

public getComentarios():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter={"include":["comentarios_usuario"]}`);
}

public getDocumentoComentarios():Observable<any>{
  const x = {
    include: [
      {
        relation: 'comentarios_usuario',
        scope: {
          include: [{relation: 'comentario_documento'}],
        },
      },
    ],
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter=${y}`);
}

public getRatings():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter={"include":["ratings_usuario"]}`);
}

public getDocumentoRatings():Observable<any>{
  const x = {
    include: [
      {
        relation: 'ratings_usuario',
        scope: {
          include: [{relation: 'rating_documento'}],
        },
      },
    ],
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter=${y}`);
}

public getRol():Observable<any>{ 
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter={"include":["usuario_rol"]}`);
}

public getRolById(i:string):Observable<any>{ 
  const x = {
    where: {
      id: i
    },
    include: [{relation:'usuario_rol'}]
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter=${y}`);
}

public getDocsById(i:string):Observable<any>{ 
  const x = {
    where: {
      id: i
    },
    include: [{relation:'documentos_usuario'}]
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter=${y}`);
}

public getComentsById(i:string):Observable<any>{ 
  const x = {
    where: {
      id: i
    },
    include: [{relation:'comentarios_usuario'}]
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/usuarios/?filter=${y}`);
}

public getDocumentosUsrNombre(nom:string):Observable<any>{
  const x = {
    where: {
      nombre: {
        like: nom+'%'
      },
      include: [{relation:'documento_usuario'}]
    }
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/documentos?filter=${y}`);
}

public getDocsUsrByUsrNombre(nom:string):Observable<any>{
  const x = {
    include: [{relation:'documentos_usuario'}],
    where: {
      nombre: {
        like: nom+'%'
      }
    }
  };
  const y = encodeURIComponent(JSON.stringify(x));
  return this.http.get<any>(`${this.baseUrl}/usuarios?filter=${y}`);
}
//#endregion
}
