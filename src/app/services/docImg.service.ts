import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocImgService {

  constructor(private http:HttpClient) { }

  public postDocImg (): Observable<any> {
    const headers = {'content-type': 'application/json'};
    let x = {
      "Parameters": [
          {
              "Name": "File",
              "FileValue": {
                  "Url": "https://firebasestorage.googleapis.com/v0/b/repoitlp-c59be.appspot.com/o/Documentos%2FSpitfire_Practica13.pdf?alt=media&token=c9ac907c-56ed-49a2-b49e-f6e385da5f3d"
              }
          },
          {
              "Name": "StoreFile",
              "Value": true
          },
          {
              "Name": "PageRange",
              "Value": "1"
          }
      ]
  };
    const body = JSON.stringify(x);
    return this.http.post(` https://v2.convertapi.com/convert/pdf/to/png?Secret=TWohDfBTts4v26kl`,body, {'headers': headers, observe: 'response'});
  }

}
