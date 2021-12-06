import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { LoggeadoService } from 'src/app/services/loggeado.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(readonly snackBar: MatSnackBar, private usuario:UsuarioService,private router:Router,private logged:LoggeadoService) { }

  ngOnInit(): void {
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button";//esta linea es necesaria para chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngProcesarDatos(datos:Object){
    if(datos['usuario'] == null || datos['usuario'] == "") //Validaciones vacio o nulo
      this.openSnackBar("ERROR: Debe ingresar un usuario","OK");
    else if(datos['contrasena'] == null || datos['contrasena'] == "")
      this.openSnackBar("ERROR: Debe ingresar una contraseña","OK");
    else if(datos['usuario'].length > 50) //Validaciones de longitud
      this.openSnackBar("ERROR: El nombre de usuario excede el máximo de caractéres","OK");
    else if(datos['contrasena'].length > 200)
      this.openSnackBar("ERROR: La contraseña excede el máximo de caractéres","OK");
    else{
      this.usuario.getUsuarios().subscribe((data)=>{
        let existe = false;
        for(let i =0; i < data.length;i++){
          if(data[i].id == datos['usuario'] && data[i].contrasena == datos['contrasena']){ //no es usuario, es ID
            console.log(datos);
            this.router.navigate([`/inicio/${datos['usuario']}`]);
            this.logged.setUsrId(true);
            existe = true;
            break;
          }
        }
        if(!existe)
          this.openSnackBar("ERROR: Los datos ingresados son incorrectos","OK");
      });
    }
  }
}
