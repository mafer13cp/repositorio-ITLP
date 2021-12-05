import { viewClassName } from '@angular/compiler';
import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logInContainer',
  templateUrl: './logInContainer.component.html',
  styleUrls: ['./logInContainer.component.css','../../app.component.css']
})
export class LogInContainerComponent implements OnInit {
  @Output() public LCEvent = new EventEmitter();
  usuario:string;
  contrasena:string;
  datos:Object;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngRecibirUsuario(texto:string){
    this.usuario = texto; 
  }

  ngRecibirContrasena(texto:string){
    this.contrasena = texto;
  }

  ngEnviarDatos(){
    this.datos = {usuario:this.usuario, contrasena:this.contrasena};
    this.LCEvent.emit(this.datos);
  }
  ngShowRegistro(){
    //Redireccionar a la pantalla de registro.
    this.router.navigate(['/registro']);
  }
}
