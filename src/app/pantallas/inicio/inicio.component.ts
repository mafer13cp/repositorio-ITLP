import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','../../app.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private usuario:UsuarioService) { }

  ngOnInit(): void {
    
    /* PARA EJECUTAR UNA CONSULTA.
    this.prueba().then((data)=>{
      console.log(data);      
      console.log("Proceso finalizado");
    });
    */

  }

  ngClickSF(text:string){
    console.log("Desde inicio");
    console.log(text);
  }

  /*
  prueba(){
    return new Promise((resolve,reject)=>{
      this.usuario.getRol().subscribe((data)=>{
        resolve(data);
      });
    });
  }
  */
 
}
