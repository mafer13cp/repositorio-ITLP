import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  idUsr:string[] = [];
  correosUsr:string[] = [];

  constructor(readonly snackBar: MatSnackBar, private usuario:UsuarioService, private carrera:CarreraService,
    private router:Router) { }

  ngOnInit(): void {
    this.usuario.getUsuarios().subscribe((data)=>{
      data.forEach(u => {
        this.idUsr.push(u.id);
        this.correosUsr.push(u.correo);
      });
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
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
      this.openSnackBar("ERROR: El nombre no puede exceder los 50 caracteres","OK");
    else if(datos['correo'].length > 50)
      this.openSnackBar("ERROR: El correo no puede exceder los 50 caracteres","OK");
    else if(datos['contrasena'].length > 40)
      this.openSnackBar("ERROR: La contraseña no puede exceder los 40 caracteres","OK");
    else if(datos['id'].length > 15)
      this.openSnackBar("ERROR: El número de control no puede exceder los 15 caracteres","OK");
    else {
      let re = new RegExp(`.*@lapaz.tecnm.mx$`,'i');
      if(datos['correo'].match(re)){
        if(datos['rol']=="Alumno")
          this.idRol = 0;
        else if(datos['rol']=="Maestro")
          this.idRol = 1;
        else if(datos['rol']=="Empleado")
          this.idRol = 2;
        else if(datos['rol']=="Administrador")
          this.idRol = 3;

        let existe = false;
        for(let i = 0; i < this.idUsr.length; i++){
          if(this.idUsr[i] == datos['id'])
            existe = true;
        }

        let existe2 = false;
        for(let i = 0; i < this.correosUsr.length; i++){
          if(this.correosUsr[i] == datos['correo'])
            existe2 = true;
        }

        if(existe2)
          this.openSnackBar("ERROR: El correo ya se encuentra registrado","OK");
        else if(existe)
          this.openSnackBar("ERROR: El número de control ya está registrado","OK");
        else{
          this.carrera.getCarreraByName(datos['carrera']).subscribe((data)=>{
            this.idCarr = data[0].id;
            this.usr = {id:datos['id'].toUpperCase(),correo:datos['correo'].toLowerCase(),contrasena:datos['contrasena'], descripcion:"", nombre:datos['nombre'], fk_rol:this.idRol,fk_carrera:this.idCarr,imagen:0};
            this.usuario.postUsuario(this.usr).subscribe(data=>{
              this.openSnackBar("Usuario dado de alta exitosamente","OK");
              setTimeout(() => {
                this.router.navigate(['/Login'])
              }, 1000);
            });
          });
        }
      }
      else{
        this.openSnackBar("ERROR: El correo no tiene el formato correcto","OK");
      }
    }
  }
}
