import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocImgService {

  constructor(private http:HttpClient) { }

  public postDocImg (urlArchivo: string, name: string): Observable<any> {
    const headers = {'content-type': 'application/json'};
    let n = name + ".repositorioItlp";
    let x = {
      "Parameters": [
          {
              "Name": "File",
              "FileValue": {
                  "Url": urlArchivo
              }
          },
          {
              "Name": "StoreFile",
              "Value": true
          },
          {
              "Name": "FileName",
              "Value": n
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
