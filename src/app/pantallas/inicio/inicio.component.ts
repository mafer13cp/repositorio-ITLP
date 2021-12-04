import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','../../app.component.css']
})
export class InicioComponent implements OnInit {
  user:UsuarioAutorDocumento[];

  constructor(private usuario:UsuarioService) { }

  ngOnInit(): void {
    const timeElapsed = Date.now();
const today = new Date(timeElapsed);
today.toLocaleDateString();
console.log(today);
    /*
    // PARA EJECUTAR UNA CONSULTA.
    this.prueba1().then((data)=>{
      console.log(data);
      console.log("Sigue el arreglo");
      this.user = <UsuarioAutorDocumento[]>data;      
      console.log(this.user);
      console.log("Proceso finalizado");
      this.user.forEach(usuario => {
        if(usuario.nombre == "Alfonso Rochín Gómez"){
          console.log(usuario);
        }
      });
    });
    */

  }

  ngClickSF(text:string){
    //redireccionar a resBusqueda y mandar parámetro ingresado
    console.log("Desde inicio");
    console.log(text);
  }
  ngClickAcc(text: string)
  {
    console.log("desde inicio: " + text);
  }

  ngSubir(){
    //Redireccionar a página para subir documento
    console.log("Botón de subir");
  }
/*
  prueba1(){
    return new Promise((resolve,reject)=>{
      this.usuario.getDocumentos().subscribe((data)=>{
        resolve(data);
      });
    });
  }
  */
 
}
