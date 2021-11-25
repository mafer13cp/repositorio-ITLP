import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
import { Firestore } from '@angular/fire/firestore';

firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  storageRef = firebase.app().storage().ref();

  constructor() { }

  async uploadDoc(file:File):Promise<string> {
    const archivoPath = this.storageRef.child(`Documentos/${file.name}`);
    await archivoPath.put(file);
    const url = await archivoPath.getDownloadURL();
    return url;
  }

  //Desplegado de un archivo.

  async consultDoc(name: string):Promise<string>{
    const arch = this.storageRef.child(`Documentos/${name}`);
    //Name tiene que venir con extensión de archivo
    const url = await arch.getDownloadURL();
    return url;
  }

}
