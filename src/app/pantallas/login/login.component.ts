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
    console.log(datos);
    //Aqui se debería revisar los datos del login.
  }
}
