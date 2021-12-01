import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngRecibirDatos(datos:Object){
    if(datos['nombre'] == null || datos['nombre'] == "")
      alert("ERROR: Se debe ingresar un nombre");
    else if(datos['correo'] == null)
      alert("ERROR: Se debe ingresar un correo");
    else if(datos['contrasena'] == null)
      alert("ERROR: Se debe ingresar una contraseña");
    else if(datos['id'] == null)
      alert("ERROR: Se debe ingresar un número de control");
    else if(datos['rol'] == null)
      alert("ERROR: Se debe seleccionar un rol");
    else if(datos['carrera'] == null)
      alert("ERROR: Se debe seleccionar una carrera");
    else{
      console.log(datos);
      //Aqui se sube a la BD.
    }
  }
}
