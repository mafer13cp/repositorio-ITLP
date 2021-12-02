import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/interfaces/usuario';
import { CarreraService } from 'src/app/services/carrera.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usr:Usuario;
  idRol:number;
  idCarr:string;

  constructor(readonly snackBar: MatSnackBar, private usuario:UsuarioService, private carrera:CarreraService) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  ngRecibirDatos(datos:Object){
    if(datos['nombre'] == null || datos['nombre'] == "") //Validacion vacio o nulo
      this.openSnackBar("ERROR: Se debe ingresar un nombre","OK");
    else if(datos['correo'] == null)
      this.openSnackBar("ERROR: Se debe ingresar un correo","OK");
    else if(datos['contrasena'] == null)
      this.openSnackBar("ERROR: Debe ingresar una contraseña","OK");
    else if(datos['id'] == null)
      this.openSnackBar("ERROR: Debe ingresar un número de control","OK");
    else if(datos['rol'] == null)
      this.openSnackBar("ERROR: Se debe seleccionar un rol","OK");
    else if(datos['carrera'] == null)
      this.openSnackBar("ERROR: Se debe seleccionar una carrera","OK");
    else if(datos['nombre'].length > 50) //Validacion de longitud
      this.openSnackBar("ERROR: El nombre de usuario no puede exceder los 50 caracteres","OK");
    else if(datos['correo'].length > 50)
      this.openSnackBar("ERROR: El correo no puede exceder los 50 caracteres","OK");
    else if(datos['contrasena'].length > 200)
      this.openSnackBar("ERROR: La contraseña no puede exceder los 200 caracteres","OK");
    else if(datos['id'].length > 15)
      this.openSnackBar("ERROR: El número de control no puede exceder los 15 caracteres","OK");
    else {
      let re1 = new RegExp(`.*@gmail.com$`,'i');
      let re2 = new RegExp(`.*@outlook.es$`,'i');
      let re3 = new RegExp(`.*@lapaz.tecnm.mx$`,'i');
      let re4 = new RegExp(`.*@outlook.com$`,'i');
      let re5 = new RegExp(`.*@hotmail.com$`,'i');
      let re6 = new RegExp(`.*@yahoo.mx$`,'i');
      if(datos['correo'].match(re1) || datos['correo'].match(re2) || datos['correo'].match(re3) || datos['correo'].match(re4)|| datos['correo'].match(re5)|| datos['correo'].match(re6)){
        if(datos['rol']=="Alumno")
          this.idRol = 0;
        else if(datos['rol']=="Maestro")
          this.idRol = 1;
        else if(datos['rol']=="Empleado")
          this.idRol = 2;
        else if(datos['rol']=="Administrador")
          this.idRol = 3;

        this.carrera.getCarreraByName(datos['carrera']).subscribe((data)=>{
          this.idCarr = data[0].id;
          console.log(data[0].id);
          console.log(this.idRol);
          this.usr = {id:datos['nombre'],correo:datos['correo'],contrasena:datos['contrasena'],nombre:datos['nombre'], fk_rol:this.idRol,fk_carrera:this.idCarr,imagen:0};
          this.usuario.postUsuario(this.usr);
        });
      }
      else{
        this.openSnackBar("ERROR: El correo no tiene el formato correcto","OK");
      }
    }
  }
}
