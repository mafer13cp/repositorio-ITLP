import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngProcesarDatos(datos:Object){
    if(datos['usuario'] == null || datos['usuario'] == "")
      alert("ERROR: Debe ingresar un usuario");
    else if(datos['contrasena'] == null || datos['contrasena'] == "")
      alert("ERROR: Debe ingresar una contraseña")
    else{
      console.log(datos);
      //Aqui se debería revisar los datos del login.
    }
  }
}
