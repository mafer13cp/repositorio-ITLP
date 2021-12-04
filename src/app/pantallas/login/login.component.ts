import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
      console.log(datos);
      //Aqui se debería revisar los datos del login.
    }
  }
}
